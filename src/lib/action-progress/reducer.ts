import { UserActionType } from '../user/actions'
import { checkActionForPending } from './manager'

// export const actionsInProgressReducer = (state = initialState, action: AnyAction) => {
//   switch (action.type) {
//     case UserActionType.FetchUsers:
//     case UserActionType.CreateUser:
//       return state.add(action.type)
//     case UserActionType.FetchUsersFailure:
//     case UserActionType.FetchUsersSuccess:
//     case UserActionType.CreateUserFailure:
//     case UserActionType.CreateUserSuccess:
//       return state.rest()
//     default:
//       return state
//   }
// }

export const actionsInProgressReducer = checkActionForPending([
  { startOn: UserActionType.FetchUsers, stopOn: [UserActionType.FetchUsersSuccess, UserActionType.FetchUsersFailure] },
  { startOn: UserActionType.CreateUser, stopOn: [UserActionType.CreateUserSuccess, UserActionType.CreateUserFailure] },
])
