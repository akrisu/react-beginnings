import { UserAction } from 'lib/user/actions'
import { AnyAction } from 'redux'
import { combineEpics, Epic, ofType } from 'redux-observable'
import { of } from 'rxjs/observable/of'
import { catchError, map, switchMap } from 'rxjs/operators'

import { IState } from '../store'
import { UserActionType } from './actions'
import { createUser, getUsers } from './dao'

const fetchUsersRequestEpic: Epic<AnyAction, IState> = action$ => action$.pipe(
  ofType(UserActionType.FetchUsers),
  switchMap(() => getUsers().pipe(
    map(UserAction.fetchUsersSuccess),
    catchError((error: Error) => of(UserAction.fetchUsersFailure())),
  )),
)

const createUserRequestEpic: Epic<AnyAction, IState> = action$ => action$.pipe(
  ofType(UserActionType.CreateUser),
  switchMap((action: ReturnType<typeof UserAction.createUser>) => createUser(action.payload).pipe(
    map(UserAction.createUserSuccess),
    catchError((error: Error) => of(UserAction.createUserFailure())),
  )),
)

export const userEpic = combineEpics(fetchUsersRequestEpic, createUserRequestEpic)
