import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import { actionsInProgressReducer } from '../action-progress/reducer'
import { counterReducer } from '../counter/reducer'
import { userReducer } from '../user/reducer'
import { IState } from './state'

export const reducer = combineReducers<IState>({
  actionsInProgress: actionsInProgressReducer,
  counter: counterReducer,
  form: formReducer,
  user: userReducer,
})
