import React, { Component } from 'react';
import {inputData} from '../inputData.js';

import bluecircle from '../Images/bluecircle.png';

//Components
import Prebuilt from '../Components/Prebuilt.js';
/* make your own CSS file and import it here */

class BuildPart1 extends Component {
  constructor() {
    super()
    this.state = {
      inputData : this.props
    }
    this.click = this.click.bind(this)
  }

  click(event) {
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
        <div id="pc-option" className="prebuilt-options"> PC </div>
      </div>

    );
  }
}

export default BuildPart1;
