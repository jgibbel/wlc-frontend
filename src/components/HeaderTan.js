import React, { Component } from 'react';

import HamburgerMenu from 'react-hamburger-menu';
import windowSize from 'react-window-size';

import logo from "../images/wlc-blue.png";

import {
  NavLink,
  Link
} from "react-router-dom";

class HeaderTan extends Component {
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
        <NavLink className="underline-tan" to="/about"><li className='nav-link-tan menu-link'>ABOUT</li></NavLink>
        <NavLink className="underline-tan" to="/members"><li className='nav-link-tan menu-link'>MEMBERS</li></NavLink>
        <NavLink className="underline-tan" to="/mission"><li className='nav-link-tan menu-link' >WHAT WE OFFER</li></NavLink>
        <NavLink className="underline-tan" to="/programs"><li className='nav-link-tan menu-link'>PROGRAMS</li></NavLink>
       
        
        <NavLink className="underline-tan" to="/join"><li className='nav-link-tan menu-link'>JOIN</li></NavLink>
  
      </ul>
    )
  }
  
  displayMobileMenu = () => {
    return (
      <ul className="hamburgerDropDown">
        <NavLink className="underline-tan" to="/about"><li onClick={this.handleClickTop} className='ham-link-tan menu-link'>ABOUT</li></NavLink>
        <NavLink className="underline-tan" to="/members"><li onClick={this.handleClickTop} className='ham-link-tan menu-link'>MEMBERS</li></NavLink>
        <NavLink className="underline-tan" to="/mission"><li onClick={this.handleClickTop} className='ham-link-tan menu-link'>WHAT WE OFFER</li></NavLink>
        <NavLink className="underline-tan" to="/programs"><li onClick={this.handleClickTop} className='ham-link-tan menu-link'>PROGRAMS</li></NavLink>
       
        
        <NavLink className="underline-tan" to="/join"><li onClick={this.handleClickTop} className='ham-link-tan menu-link'>JOIN</li></NavLink>
  
      </ul>
    )
  }
    
    render() {
        return (
            <div>
                <div className="header-tan">
                <div className="logo"><Link to="/"><img className="logo-width" src={logo} alt="WLC for Social Impact"/></Link></div>
                <div className="nav-select">
                    { this.state.open ?  this.displayMobileMenu() : null}
                    {this.props.windowWidth > 775 ? this.displayNavBar() : this.displayHamburgerMenu()}
                </div>

                </div>
                
            </div>
        );
    }
}

export default windowSize(HeaderTan);