import React, { Component } from 'react';
import {inputData} from '../inputData.js';

import greencircle from '../Images/greencircle.png';
import yellowcircle from '../Images/yellowcircle.png';

//Components
import Prebuilt from '../Components/Prebuilt.js';
/* make your own CSS file and import it here */

class Specifications extends Component {
  constructor() {
    super()
    this.state = {
    }
    this.click = this.click.bind(this)
    this.click2 = this.click2.bind(this)
    this.click3 = this.click3.bind(this)
    this.click4 = this.click4.bind(this)
    this.click5 = this.click4.bind(this)
    this.click6 = this.click4.bind(this)
    this.click7 = this.click4.bind(this)
    this.click8 = this.click4.bind(this)
    this.click9 = this.click4.bind(this)
  }
  
  click(event) {
    inputData.add("specifications", "screen")
    this.props.sendData("!!!")
  }

  click2(event) {
    inputData.add("usedFor", "speed")
    this.props.sendData("!!!")
  }
  click3(event) {
    inputData.add("usedFor", "battery")
    this.props.sendData("!!!")
  }
  click4(event) {
    inputData.add("usedFor", "storage")
    this.props.sendData("!!!")
  }

  render() {
    return (
      <div className="components-body">
        <div className="statement">The three specifications I care the most about are </div>
        
        <div className="screen-option">
          <a onClick={this.click} href="#" >
            <img src={yellowcircle} />
          </a>
          <div> Screen Quality </div>
        </div>
                
        <div className="speed-option"> 
          <a onClick={this.click2} href="#" >
            <img src={greencircle} />
          </a>
          <div> Speed </div>
        </div>
        
        <div className="battery-option"> 
          <a onClick={this.click3} href="#" >
            <img src={yellowcircle} />
          </a>
          <div> Battery Life </div>
        </div>
        <div className="storage-option"> 
          <a onClick={this.click4} href="#" >
            <img src={greencircle} />
          </a>
          <div> Storage size </div>
        </div>
        <div className="weight-option"> 
          <a onClick={this.click5} href="#" >
            <img src={greencircle} />
          </a>
          <div> Weight </div>
        </div>
        <div className="monitor-option"> 
          <a onClick={this.click6} href="#" >
            <img src={greencircle} />
          </a>
          <div> Monitor </div>
        </div>
        <div className="os-option"> 
          <a onClick={this.click7} href="#" >
            <img src={greencircle} />
          </a>
          <div> Operating system </div>
        </div>
        <div className="ram-option"> 
          <a onClick={this.click8} href="#" >
            <img src={greencircle} />
          </a>
          <div> RAM </div>
        </div>
        <div className="processor-option"> 
          <a onClick={this.click9} href="#" >
            <img src={greencircle} />
          </a>
          <div> Processor </div>
        </div>
      </div>

    );
  }
}

export default Specifications;
