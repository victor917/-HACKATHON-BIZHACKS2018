import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      choice : ''
    }
  }
  render() {
    return (
      <nav >
        <a href='#'>Home</a>
        <a href='#'>About Us</a>
        <a href='#'>Contacts</a>
      </nav>

      
      
    );
  }
}

export default App;
