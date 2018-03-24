import React, { Component } from 'react';
import {inputData} from '../inputData.js';

import greencircle from '../Images/greencircle.png';
import yellowcircle from '../Images/yellowcircle.png';
import storagesize from '../Images/storagesize.jpg';
import ram from '../Images/ram.jpg';
import monitor from '../Images/monitoricon.jpg';
//Components
import Prebuilt from '../Components/Prebuilt.js';
/* make your own CSS file and import it here */

class Specifications extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      spec1: "",
      spec2: "",
      spec3: ""
    }
    this.click = this.click.bind(this)
    this.finish = this.finish.bind(this)
  }
  
  click(data) {
    console.log('hi');
    if (this.state.count === 0) {
      this.setState({
        spec1: data,
        count: 1
      })
    }
    else if ((this.state.count === 1) && (data !== this.state.spec1)) {
      this.setState({
        spec2: data,
        count: 2
      })
    }
    else if ((this.state.count === 2) && (data !== this.state.spec1) && (data !== this.state.spec2)){
      this.setState({
        spec3: data,
        count: 3
      })
    }
  }

  finish() {
    if (this.state.count === 3) {
      inputData.add("spec1", this.state.spec1)
      inputData.add("spec2", this.state.spec2)
      inputData.add("spec3", this.state.spec3)
      this.props.sendData("finished")
    }
  }
  

  render() {
    return (
      <div className="components-body" onLoad={this.finish()} >
        <div className="statement">The three specifications I care the most about are </div>
        <div className="options-container img-styles">
          <div className="screen-option jpg-edit">
            <a onClick={() => this.click("screen-screen")} href="#" >
              <img src={yellowcircle} />
            </a>
            <div> Screen Quality </div>
          </div>
          <div className="speed-option jpg-edit"> 
            <a onClick={() => this.click("speed-option")} href="#" >
              <img src={greencircle} />
            </a>
            <div className="speed-text"> Speed </div>
          </div>
          
          <div className="battery-option jpg-edit"> 
            <a onClick={() => this.click("battery-option")} href="#" >
              <img src={yellowcircle} />
            </a>
            <div> Battery Life </div>
          </div>
          <div className="storage-option"> 
            <a onClick={() => this.click("storage-option")} href="#" >
              <img src={storagesize} />
            </a>
            <div> Storage size </div>
          </div>
          <div className="weight-option"> 
            <a onClick={() => this.click("weight-option")} href="#" >
              <img src={greencircle} />
            </a>
            <div> Weight </div>
          </div>
          <div className="monitor-option"> 
            <a onClick={() => this.click("monitor-option")} href="#" >
              <img src={monitor} />
            </a>
            <div> Monitor </div>
          </div>
          <div className="os-option"> 
            <a onClick={() => this.click("os-option")} href="#" >
              <img src={greencircle} />
            </a>
            <div> Operating system </div>
          </div>
          <div className="ram-option"> 
            <a onClick={() => this.click("ram-option")} href="#" >
              <img src={ram} />
            </a>
            <div> RAM </div>
          </div>
          <div className="motherboard-option"> 
            <a onClick={() => this.click("motherboard-option")} href="#" >
              <img src={greencircle} />
            </a>
            <div> Motherboard </div>
          </div>
      </div>
    </div>
    );
  }
}

export default Specifications;
