import { ACTION_ADD, ACTION_DEC } from '../actionTypes'


export default (state, action)=>{
  console.log(state)
  switch(action.type){
    case ACTION_ADD:
      state.init += 1
      return state

    case ACTION_DEC:
      state.init -= 1
      return state

    default:
      state = state ?  state :  {}
      return state
  }
}