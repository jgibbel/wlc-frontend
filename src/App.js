import React, { Component } from 'react';
import './index.css';
import HamburgerMenu from 'react-hamburger-menu';
import windowSize from 'react-window-size';

import Home from './Home';
import Mission from './Mission';
import Members from './Members';
import Join from './Join';
import Events from './Events';
import Landing from './Landing'
import HeaderWhite from './components/HeaderWhite'
import HeaderTan from './components/HeaderTan'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";


class App extends Component {


  render() {
  return (
    <Router>
    
    <Switch>
        <Route exact path="/wlc-frontend">
          
          <Landing />
        </Route>
        <Route exact path="/">
       
          <Landing />
        </Route>
        <Route exact path="/about">
          <HeaderWhite />
          <Home />
        </Route>
        <Route path="/mission">
        <HeaderWhite />
          <Mission />
        </Route>
        <Route exact path="/members">
        <HeaderWhite />
          <Members />
        </Route>
        <Route path="/join">
        <HeaderWhite />
          <Join />
        </Route>
    </Switch>  

    

    </Router>
  );
}
}

export default windowSize(App);