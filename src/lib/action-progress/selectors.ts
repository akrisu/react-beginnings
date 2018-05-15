import { Set } from 'immutable'
import { IState } from 'lib/store/state'
import { createSelector } from 'reselect'

import { IAction } from '../../common/redux/action'

export const selectActionsInProgressFeature = (state: IState) => state.actionsInProgress
export const selectActionsInProgressNumber = createSelector(selectActionsInProgressFeature, actions => actions.size)
