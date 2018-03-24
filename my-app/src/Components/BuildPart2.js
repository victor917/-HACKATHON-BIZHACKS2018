import React, { Component } from 'react';
import {inputData} from '../inputData.js';

import buildyourown from '../Images/flat-buildyourown.jpg';
import prebuilt from '../Images/flat-prebuilt.png';

//Components
import Prebuilt from '../Components/Prebuilt.js';
/* make your own CSS file and import it here */

/* Computer -> Customized has prebuilt and BYO*/
class BuildPart2 extends Component {
  constructor() {
    super()
    this.state = {
    }
    this.click = this.click.bind(this)
    this.click2 = this.click2.bind(this)
  }

  click(event) {
    inputData.add("customized", "prebuild")
    this.props.sendData("usedFor")
  }

  click2(event) {
    inputData.add("customized", "custom")

    this.props.sendData("buildyourown")
  }

  render() {
    return (
      <div className="components-body">
        <div className="statement">I want to  </div>

          <div className="options-container two-options">
            <div className="prebuilt-option">
              <a onClick={this.click} href="#" >
              <img src={prebuilt} />
              </a>
              <div> buy a Pre-built </div>
            </div>
                
            <div className="buildown-option">
              <a onClick={this.click2} href="#" >
                <img src={buildyourown} />
              </a> 
              <div> Build my own </div>
            </div>
       
          </div>
      </div>

    );
  }
}

export default BuildPart2;
