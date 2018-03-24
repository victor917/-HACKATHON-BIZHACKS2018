import React, { Component } from 'react';
import {inputData} from '../inputData.js';

import pc from '../Images/Flat-PC.png';
import laptop from '../Images/Flat-laptop-icon.jpg';

//Components
import Prebuilt from '../Components/Prebuilt.js';
/* make your own CSS file and import it here */

class BuildPart1 extends Component {
  constructor() {
    super()
    this.state = {
    }
    this.click = this.click.bind(this)
    this.click2 = this.click2.bind(this)
  }


  click(event) {
    // Up 
    inputData.add("type", "laptop")
    inputData.add("customized", "prebuilt")
    this.props.sendData("usedFor")
  }

  click2(event) {
    inputData.add("type", "desktop")
    this.props.sendData("customized")
  }

  render() {
    return (
      <div className="components-body">
        
        <div className="statement">I am looking for a </div>

          <div className="options-container two-options">
            <div className="laptop-option">
              <a onClick={this.click} href="#" > 
                <img src={laptop} />
              </a>
              <div className="laptop-text"> Laptop </div>
            </div>
            
            <div className="pc-option">
              <a onClick={this.click2} href="#" >
                <img src={pc} />
              </a>

            <div className="pc-text"> Desktop </div>
            </div>
        </div>
      </div>

    );
  }
}

export default BuildPart1;
