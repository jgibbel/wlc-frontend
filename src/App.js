import React from 'react';
import './index.css';

import Home from './Home';
import Mission from './Mission';
import Members from './Members';
import Join from './Join';
import Events from './Events';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="header">
    <div className="logo"><Link className="" to="/"><h1 className="underline">WLC <span>for Social Impact</span></h1></Link></div>
    <div className="nav">
      <div className="navLink"><NavLink className="underline" to="/">WHO WE ARE</NavLink></div> 
      <div className="navLink"><NavLink className="underline" to="/mission">MISSION</NavLink></div>  
      <div className="navLink"><NavLink className="underline" to="/members">MEMBERS</NavLink></div>   
      <div className="navLink"><NavLink className="underline" to="/join">JOIN</NavLink></div>   
      <div className="navLink">login</div>   
       
    </div>

    </div>
    <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/mission">
          <Mission />
        </Route>
        <Route exact path="/members">
          <Members />
        </Route>
        <Route path="/join">
          <Join />
        </Route>
        <Route path="/events">
          <Events />
        </Route>
    </Switch>  

    

    </Router>
  );
}

export default App;
