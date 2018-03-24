import React, { Component } from 'react';
import {inputData} from '../inputData.js';

import redcircle from '../Images/redcircle.png';

//Components
import Prebuilt from '../Components/Prebuilt.js';
/* make your own CSS file and import it here */

class BuildPart2 extends Component {
  constructor() {
    super()
    this.state = {
    }
  }
  render() {
    return (
      <div className="components-body">
        <div className="statement">I am looking for a </div>
        <a onClick={inputData.add("customized", "prebuilt")} href="/App" >
            <img src={redcircle} />
        </a>
        <div id="pc-option" className="prebuilt-options"> PC </div>
      </div>

    );
  }
}

export default BuildPart2;
