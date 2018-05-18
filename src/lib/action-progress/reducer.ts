import { UserActionType } from '../user/actions'
import { checkActionForPending } from './pending-actions-manager'

export const actionsInProgressReducer = checkActionForPending([
  { startOn: UserActionType.FetchUsers, stopOn: [UserActionType.FetchUsersSuccess, UserActionType.FetchUsersFailure] },
  { startOn: UserActionType.CreateUser, stopOn: [UserActionType.CreateUserSuccess, UserActionType.CreateUserFailure] },
])
