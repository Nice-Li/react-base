import { createStore } from 'redux'
import reducer from './reducers/index'
import state from './state'

export default  createStore(reducer, state)



