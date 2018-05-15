import { ActionsUnion, createAction } from 'common/redux/action'
import { Map } from 'immutable'

import { ICreateUserDTO, IUser, UserID } from './dto'

export enum UserActionType {
  CreateUser = 'CREATE_USER',
  CreateUserFailure = 'CREATE_USER_FAILURE',
  CreateUserSuccess = 'CREATE_USER_SUCCESS',
  FetchUsers = 'FETCH_USERS',
  FetchUsersFailure = 'FETCH_USERS_FAIL',
  FetchUsersSuccess = 'FETCH_USERS_SUCCESS',
}

export const UserAction = {
  createUser: (createUser: ICreateUserDTO) => createAction(UserActionType.CreateUser, createUser),
  createUserFailure: () => createAction(UserActionType.CreateUserFailure),
  createUserSuccess: (user: IUser) => createAction(UserActionType.CreateUserSuccess, user),
  fetchUsers: () => createAction(UserActionType.FetchUsers),
  fetchUsersFailure: () => createAction(UserActionType.FetchUsersFailure),
  fetchUsersSuccess: (users: Map<UserID, IUser>) => createAction(UserActionType.FetchUsersSuccess, users),
}

export type UserAction = ActionsUnion<typeof UserAction>
