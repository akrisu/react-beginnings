import { combineEpics, createEpicMiddleware } from 'redux-observable'

import { userEpic } from '../user'

export const epic = createEpicMiddleware(combineEpics(userEpic))
