import React, { useState } from 'react';
import store, { boundActions } from '../../store'
// import * as action from '../../store/action'

export default () => {
  const [, faceUpdate] = useState({})

  return <>
    <button onClick={()=>{
      // store.dispatch(action.add())
      boundActions.add()
      faceUpdate({})
    }}>one add</button>
    <button onClick={()=>{
      // store.dispatch(action.dec())
      boundActions.dec()
      faceUpdate({})
    }}>one dec</button>
    <p>这里是reducerOne--init:{store.getState().reducerOne.init}</p>
    <hr/>
    <button onClick={()=>{
      // store.dispatch(action.more())
      boundActions.more()
      faceUpdate({})
    }}>two more</button>
    <button onClick={()=>{
      // store.dispatch(action.less())
      boundActions.less()
      faceUpdate({})
    }}>two less</button>
    <p>这里是reducerTwo--init:{store.getState().reducerTwo.init}</p>

  </>
}