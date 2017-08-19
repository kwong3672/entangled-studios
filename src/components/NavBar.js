import React, { Component } from 'react';
import './NavBar.css'
import logo from '../assets/logo.svg';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <img src={logo} className="NavBar-logo" alt="logo" />
      </div>
    );
  }
}

export default NavBar;
