import { Action } from 'redux'
import { CounterAction, CounterActionType } from './actions'

const initialState = 0

export const counterReducer = (state = initialState, action: CounterAction): number => {
  switch (action.type) {
    case CounterActionType.Increment:
      return state + 1

    case CounterActionType.Decrement:
      return state - 1

    default:
      return state
  }
}
