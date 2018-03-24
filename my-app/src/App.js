import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import './App.css';
import { inputData } from "./inputData";
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// Components
import Header from './Components/Header.js';
import BuildPart1 from './Components/BuildPart1.js';
import BuildPart2 from './Components/BuildPart2.js';
import UsedFor from './Components/UsedFor.js';
import Prebuilt from './Components/Prebuilt';
import Specifications from './Components/Specifications';
import BuildYourOwnV2 from './Components/BuildYourOwnV2.js';

class App extends Component {
    constructor() {
        super();
        this.state = {
          nextClick: ''
        };
        this.getData = this.getData.bind(this)
    }

    componentDidMount() {
        fetch(`https://api.bestbuy.com/v1/products((categoryPath.id=abcat0501000))?apiKey=qunSuq0NntN63fGiOKHWaykd&format=json`)
            .then(response => response.json())
            .then(json => {
                console.log('Category data', json);
            });

        inputData.add("type", "desktop");
    }

    getData(data) {
      this.setState({
        nextClick: data
      })
    }

    prompt() {
      if (this.state.nextClick === '') {
        return <BuildPart1 sendData={this.getData}/>
      }
      else if (this.state.nextClick === 'customized') {
        return  <BuildPart2 sendData={this.getData}/>
      }
      else if (this.state.nextClick === 'usedFor') {
        return <UsedFor sendData={this.getData}/>
      }
      else if (this.state.nextClick === 'specifications') {
        return <Specifications sendData={this.getData} />
      }
      else if (this.state.nextClick === 'buildyourown') {
        return <BuildYourOwnV2 />
      }
    }

    render() {
        return (
            <Router>
            <div>
              <Header />
              <div className="App-Window">
                {this.prompt()}
              </div>
            </div>
            </Router>
        );
    }

}

export default App;
