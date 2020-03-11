import React from 'react';
import './index.css';

import Home from './Home';
import Mission from './Mission';
import Members from './Members';
import Join from './Join';
import Events from './Events';

import logo from "./images/wlc-logo.svg";

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
    <div className="logo"><Link to="/"><img className="logo-width" src={logo} alt="WLC for Social Impact"/></Link></div>
    <div className="nav">
      <div className="navLink"><NavLink className="underline" to="/">ABOUT</NavLink></div> 
      <div className="navLink"><NavLink className="underline" to="/mission">WHAT WE OFFER</NavLink></div>  
      <div className="navLink"><NavLink className="underline" to="/members">MEMBERS</NavLink></div>   
      <div className="navLink"><NavLink className="underline" to="/join">JOIN</NavLink></div>      
    </div>

    </div>
    <Switch>
        <Route exact path="/">
          <Home />
          <hr></hr>
          <Mission />
          <hr></hr>
          <Members />
          <hr></hr>
          <Join />
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
