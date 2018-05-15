import { Map } from 'immutable'

import { UserAction, UserActionType } from './actions'
import { IUserState } from './state'

const initialState: IUserState = {
  data: Map(),
  isFetching: false,
  isSaving: false,
}

export const userReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case UserActionType.FetchUsers:
      return {
        ...state,
        isFetching: true,
      }

    case UserActionType.FetchUsersSuccess:
      return {
        ...state,
        data: state.data.merge(action.payload),
        isFetching: false,
      }
    case UserActionType.CreateUser:
      return {
        ...state,
        isSaving: true,
      }

    case UserActionType.CreateUserSuccess:
      const { id } = action.payload

      return {
        ...state,
        data: state.data.set(id, action.payload),
        isSaving: false,
      }

    case UserActionType.CreateUserFailure:
      return {
        ...state,
        isSaving: false,
      }

    default:
      return state
  }
}
