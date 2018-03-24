import React, { Component } from 'react';
import './App.css';
import Prebuilt from './Components/Prebuilt';

class App extends Component {
  constructor() {
    super()
    this.state = {
      choice : ''
    }
  }
  render() {
    return (
      <div>
      <nav >
        <a href='#'>Home</a>
        <a href='#'>About Us</a>
        <a href='#'>Contacts</a>
      </nav>

      
      <Prebuilt />
      </div>
    );
  }
}

export default App;
