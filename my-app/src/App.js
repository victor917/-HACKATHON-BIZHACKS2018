import React, { Component } from 'react';
import logo from './logo.svg';
import fetch from 'isomorphic-fetch';
import './App.css';
import Header from './Components/Header.js';
import BuildPart1 from './Components/BuildPart1.js';
import Prebuilt from './Components/Prebuilt';
import { inputData } from "./inputData";

class App extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    componentDidMount() {
        fetch(`https://api.bestbuy.com/v1/products((categoryPath.id=abcat0501000))?apiKey=qunSuq0NntN63fGiOKHWaykd&format=json`)
            .then(response => response.json())
            .then(json => {
                console.log('Category data', json);
            });

        inputData.add("type", "desktop");
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
