import { Set } from 'immutable'
import { AnyAction } from 'redux'

export interface IPendingActionsConfiguration {
  readonly startOn: string
  readonly stopOn: string[]
}

export const checkActionForPending = (configuration: IPendingActionsConfiguration[]) =>
  (state = Set<string>(), action: AnyAction): Set<string> => {
    if (configuration.find(actionConfiguration => action.type === actionConfiguration.startOn)) {
      return state.add(action.type)
    }

    const actionToRemove = configuration
      .find(configurationElement => configurationElement.stopOn
        .some(stopOnElement => stopOnElement === action.type))

    if (actionToRemove) {
      return state.delete(actionToRemove.startOn)
    }

    return state
  }
