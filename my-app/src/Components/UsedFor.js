import React, { Component } from 'react';
import {inputData} from '../inputData.js';

import greencircle from '../Images/greencircle.png';
import yellowcircle from '../Images/yellowcircle.png';

//Components
import Prebuilt from '../Components/Prebuilt.js';
/* make your own CSS file and import it here */

class UsedFor extends Component {
  constructor() {
    super()
    this.state = {
    }
    this.click = this.click.bind(this)
    this.click2 = this.click2.bind(this)
    this.click3 = this.click3.bind(this)
    this.click4 = this.click4.bind(this)
  }

  click(event) {
    inputData.add("usedFor", "gaming")
    this.props.sendData("specifications")
  }

  click2(event) {
    inputData.add("usedFor", "design")
    this.props.sendData("specifications")
  }
  click3(event) {
    inputData.add("usedFor", "design")
    this.props.sendData("specifications")
  }
  click4(event) {
    inputData.add("usedFor", "design")
    this.props.sendData("specifications")
  }

  render() {
    return (
      <div className="components-body">
        <div className="statement">Select Purpose</div>
        
        <div className="gaming-option">
          <a onClick={this.click} href="#" >
            <img src={yellowcircle} />
          </a>
          <div> Gaming </div>
        </div>
                
        <div>
          <a onClick={this.click2} href="#" >
            <img src={greencircle} />
          </a>
        </div>
        <div className="design-option"> Design </div>
      
      </div>

    );
  }
}

export default UsedFor;
