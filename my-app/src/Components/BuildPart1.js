import React, { Component } from 'react';
import {inputData} from '../inputData.js';

import bluecircle from '../Images/bluecircle.png';
import redcircle from '../Images/redcircle.png';

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
    inputData.add("type", "laptop")
    this.props.sendData("customized")
  }

  click2(event) {
    inputData.add("type", "desktop")
    this.props.sendData("customized")
  }

  render() {
    return (
      <div className="components-body">
        <div className="statement">I am looking for a </div>
        <div>
          <a onClick={this.click} href="#" >
            <img src={bluecircle} />
          </a>
        </div>
        <div id="laptop-option" className="prebuilt-options"> Laptop </div>
        <div>
          <a onClick={this.click2} href="#" >
            <img src={redcircle} />
          </a>
        </div>
        <div id="pc-option" className="prebuilt-options"> Desktop </div>
      </div>

    );
  }
}

export default BuildPart1;
