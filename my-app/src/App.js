import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header.js';
import BuildPart1 from './Components/BuildPart1.js';
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

        <Header />
        <div className="App-Window">
          <BuildPart1 />
        </div>
      
        <Prebuilt />
      </div>
    );
  }
}

export default App;
