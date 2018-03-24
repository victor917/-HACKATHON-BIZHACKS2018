import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
  constructor() {
    super()
    this.state = {
      choice : ''
    }
  }
  render() {
    return (
      <header>
        <nav className="Header-navigation">
          <span><a href='/App'>BestBuyCompareTree</a></span>
          <a href='/App'>Contacts</a>
          <a href='#'>About Us</a>
          <a href='/App'>Home</a>
        </nav>


      </header>
    );
  }
}

export default Header;
