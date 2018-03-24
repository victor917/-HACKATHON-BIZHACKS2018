import React, { Component } from 'react';
import {inputData} from '../inputData.js';

import greencircle from '../Images/greencircle.png';
import yellowcircle from '../Images/yellowcircle.png';

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
              <img src={yellowcircle} />
              </a>
              <div> buy a Pre-built </div>
            </div>
                
            <div className="buildown-option">
              <a onClick={this.click2} href="#" >
                <img src={greencircle} />
              </a> 
              <div> Build my own </div>
            </div>
       
          </div>
      </div>

    );
  }
}

export default BuildPart2;
