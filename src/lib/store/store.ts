import { createStore } from 'redux'

import { enhancer } from './enhancer'
import { reducer } from './reducer'

export const store = createStore(reducer, enhancer)
