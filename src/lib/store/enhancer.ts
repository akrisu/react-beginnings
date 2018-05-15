import { applyMiddleware, compose, Middleware } from 'redux'

import { epic } from './epic'

/* tslint:disable no-any */

const middlewares: Middleware[] = [epic]
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const enhancer = composeEnhancers(applyMiddleware(...middlewares))
