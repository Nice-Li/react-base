import { ACTION_MORE, ACTION_LESS } from '../actionTypes'

export default function reducerOne(state, action){
  switch(action.type){
    case ACTION_MORE:
      state.init += 5
      return state

    case ACTION_LESS:
      state.init -= 5
      return state
      
    default:
      state = state ?  state :  {}
      return state
  }
}