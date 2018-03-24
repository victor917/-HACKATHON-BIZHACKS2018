import React, { Component } from 'react';
import {inputData} from '../inputData.js';

import greencircle from '../Images/greencircle.png';
import yellowcircle from '../Images/yellowcircle.png';

//Components
import Prebuilt from '../Components/Prebuilt.js';
/* make your own CSS file and import it here */

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
    this.props.sendData("specifications")
  }

  render() {
    return (
      <div className="components-body">
        <div className="statement">I am looking for a </div>
        
        <div>
          <a onClick={this.click} href="#" >
            <img src={yellowcircle} />
          </a>
        </div>
        <div id="laptop-option" className="prebuilt-options"> Prebuilt </div>
        
        <div>
          <a onClick={this.click2} href="#" >
            <img src={greencircle} />
          </a>
        </div>
        <div id="pc-option" className="prebuilt-options"> Build Your Own </div>
      
      </div>

    );
  }
}

export default BuildPart2;
