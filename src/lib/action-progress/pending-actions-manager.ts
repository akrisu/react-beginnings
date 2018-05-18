import { Set } from 'immutable'
import { AnyAction } from 'redux'

export interface IPendingActionsConfiguration {
  readonly startOn: string
  readonly stopOn: string[]
}

export const checkActionForPending = (configuration: IPendingActionsConfiguration[]) =>
  (state = Set<string>(), action: AnyAction): Set<string> => {
    if (configuration.find(({ startOn }) => action.type === startOn)) {
      return state.add(action.type)
    }

    const actionToRemove = configuration.find(({ stopOn }) =>
      stopOn.some(actionType => actionType === action.type))

    if (actionToRemove) {
      return state.delete(actionToRemove.startOn)
    }

    return state
  }
