import { Set } from 'immutable'
import { AnyAction } from 'redux'

import { IAction } from '../../common/redux/action'
import { UserActionType } from '../user/actions'

const initialState: Set<string> = Set()

export const actionsInProgressReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case UserActionType.FetchUsers:
    case UserActionType.CreateUser:
      return state.add(action.type)
    case UserActionType.FetchUsersFailure:
    case UserActionType.FetchUsersSuccess:
    case UserActionType.CreateUserFailure:
    case UserActionType.CreateUserSuccess:
      return state.rest()
    default:
      return state
  }
}
