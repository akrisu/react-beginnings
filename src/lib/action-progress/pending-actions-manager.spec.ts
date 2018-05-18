import { createAction } from 'common/redux'
import { Set } from 'immutable'

import { checkActionForPending, IPendingActionsConfiguration } from './pending-actions-manager'

describe('pending actions manager', () => {
  const defaultConfiguration: IPendingActionsConfiguration[] = [
      { startOn: 'FOO_A', stopOn: ['FOO_A_OK', 'FOO_A_FAIL']},
      { startOn: 'FOO_B', stopOn: ['FOO_B_OK', 'FOO_B_FAIL']},
    ]

  it('should add a pending action type into set when startOn matches with action type', () => {
    const result = checkActionForPending(defaultConfiguration)(Set<string>(), { type: 'FOO_A' })

    expect(result).toEqual(Set<string>(['FOO_A']))
  })

  it('should remove a pending action when stopOn matches with one of provided action types', () => {
    const result = checkActionForPending(defaultConfiguration)(Set<string>(['FOO_A']), { type: 'FOO_A_FAIL' })

    expect(result).toEqual(Set<string>())
  })

  it('should not remove a startOn action when stopOn action doesn\'t match', () => {
    const initialState = Set<string>(['FOO_A'])
    const result = checkActionForPending(defaultConfiguration)(initialState, { type: 'FOO_B_FAIL' })

    expect(result).toEqual(initialState)
  })
})
