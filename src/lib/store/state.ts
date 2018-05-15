import { Set } from 'immutable'
import { FormState } from 'redux-form'

import { IAction } from '../../common/redux/action'
import { IUserState } from '../user'

export interface IState {
  readonly actionsInProgress: Set<string>
  readonly counter: number
  readonly form: FormState
  readonly user: IUserState
}
