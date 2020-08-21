import { combineReducers } from 'redux'

import reducerOne from './reducerOne'
import reducerTwo from './reducerTwo'



export default combineReducers({
  reducerOne,
  reducerTwo
})

export {
  reducerOne,
  reducerTwo
}