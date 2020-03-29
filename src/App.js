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

import logo from "./images/wlc-blue.png";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";


class App extends Component {

  state = {
    open: false
  }

  componentDidMount() {
    console.log(this.props.windowWidth)
  }
  

  handleClick = () => {
    this.setState({open: !this.state.open});
  }

  handleClickTop = () => {
    this.setState({open: !this.state.open});
    window.scrollTo(0,0);
  }

  displayHamburgerMenu = () => {
    return (
      <div className="burger-icon">
        <HamburgerMenu
                isOpen={this.state.open}
                menuClicked={this.handleClick.bind(this)}
                width={40}
                height={30}
                strokeWidth={5}
                rotate={0}
                color='#0d19a3'
                borderRadius={0}
                animationDuration={0.5}
            />
            </div>
    )
}

displayNavBar = () => {
  return (
    <ul className="nav">
      <NavLink className="underline" to="/about"><li className='nav-link menu-link'>ABOUT</li></NavLink>
      <NavLink className="underline" to="/mission"><li className='nav-link menu-link' >WHAT WE OFFER</li></NavLink>
      <NavLink className="underline" to="/members"><li className='nav-link menu-link'>MEMBERS</li></NavLink>
      <NavLink className="underline" to="/join"><li className='nav-link menu-link'>JOIN</li></NavLink>

    </ul>
  )
}

displayMobileMenu = () => {
  return (
    <ul className="hamburgerDropDown">
      <NavLink className="underline" to="/"><li onClick={this.handleClickTop} className='ham-link menu-link'>ABOUT</li></NavLink>
      <NavLink className="underline" to="/mission"><li onClick={this.handleClickTop} className='ham-link menu-link'>WHAT WE OFFER</li></NavLink>
      <NavLink className="underline" to="/members"><li onClick={this.handleClickTop} className='ham-link menu-link'>MEMBERS</li></NavLink>
      <NavLink className="underline" to="/join"><li onClick={this.handleClickTop} className='ham-link menu-link'>JOIN</li></NavLink>

    </ul>
  )
}

  render() {
  return (
    <Router>
    <div className="header">
    <div className="logo"><Link to="/"><img className="logo-width" src={logo} alt="WLC for Social Impact"/></Link></div>
    <div className="nav-select">
        { this.state.open ?  this.displayMobileMenu() : null}
        {this.props.windowWidth > 945 ? this.displayNavBar() : this.displayHamburgerMenu()}
    </div>

    </div>
    <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/about">
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
}

export default windowSize(App);