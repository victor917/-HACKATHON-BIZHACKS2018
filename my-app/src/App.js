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
import Prebuilt from './Components/Prebuilt';
import UsedFor from './Components/UsedFor';
import Specifications from './Components/Specifications';


class App extends Component {
    constructor() {
        super();
        this.state = {
          nextClick: ''
          // customizedHide: true,
          // purposeHide: true
        };
        // this.prompt = this.prompt.bind(this)
        // this.changePrompt = this.changePrompt.bind(this)
        this.getData = this.getData.bind(this)
        // this.choose = this.choose.bind(this)
        // this.handlerPurp - this.handlerPurp.bind(this)
    }

    componentDidMount() {
        fetch(`https://api.bestbuy.com/v1/products((categoryPath.id=abcat0501000))?apiKey=qunSuq0NntN63fGiOKHWaykd&format=json`)
            .then(response => response.json())
            .then(json => {
                console.log('Category data', json);
            });

        // inputData.add("type", "desktop");
    }

    getData(data) {
      this.setState({
        nextClick: data
      })
    }

    // handlerPurp(e) {
    //   e.preventDefault()
    //   this.setState({
    //     purposeHide: !this.state.purposeHide
    //   })
    // }

    prompt() {
      if (this.state.nextClick === '') {
        return <BuildPart1 sendData={this.getData}/>
      }
      else if (this.state.nextClick === 'customized') { 
        return  <BuildPart2 sendData={this.getData}/>
      }
      else if (this.state.nextClick === '') {
        return ''
      }
    }

    // changePrompt(props) {
    //   this.setState({
    //     nextClick : !nextClick
    //   })
    // }

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
