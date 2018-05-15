import { Map } from 'immutable'

import { IUser, UserID } from './dto'

export interface IUserState {
  readonly data: Map<UserID, IUser>
  readonly isFetching: boolean
  readonly isSaving: boolean
}
