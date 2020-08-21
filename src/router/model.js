import React from 'react';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';



export default () => {


  return <>
    <Router>
      <ul>
        <Link to='/a'>to a</Link>
        <Link to="/b">to b</Link>
        <Link to='/c'>to c</Link>

      </ul>
      <Switch>
        <Route path='/a' render={()=>{
          return <p> a page</p>
        }}></Route>
        <Route path='/b'>
          {()=>{
            return <p> b page</p>
          }}
        </Route>
        <Route path='/c' component={()=>{
          return <p> c page</p>
        }}></Route>

      </Switch>
    </Router>
  </>
}