import { bindActionCreators } from 'redux'
import store from './createStore'
import * as actions from './action'

export const boundActions = bindActionCreators(actions, store.dispatch);

export default store

