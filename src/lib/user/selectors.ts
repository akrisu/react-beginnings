import { createSelector } from 'reselect'

import { IState } from '../store/state'

export const selectUserFeature = (state: IState) => state.user
export const selectUsers = createSelector(selectUserFeature, user => user.data)
export const isFetchingUsers = createSelector(selectUserFeature, user => user.isFetching)
export const selectFormFeature = (state: IState) => state.form
export const isSavingUserForm = createSelector(selectUserFeature, user => user.isSaving)
