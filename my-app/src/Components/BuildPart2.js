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
        super();

        this.choosePrebuilt = this.choosePrebuilt.bind(this);
        this.chooseCustomize = this.chooseCustomize.bind(this);
    }

    choosePrebuilt() {
        inputData.add("categoryPath", "(categoryPath.id=abcat0501000)");
        inputData.add("customized", "prebuilt");
        this.props.func("usedForPage");
    }

    chooseCustomize() {
        inputData.add("customized", "custom");
        this.props.func("usedForPage");
    }

    render() {
        return (
            <div className="components-body">
                <div className="statement">I want to  </div>
                <div className="options-container two-options">
                    <div className="prebuilt-option">
                        <a onClick={this.choosePrebuilt} href="#" >
                            <img src={prebuilt} />
                        </a>
                        <div> buy a Pre-built </div>
                    </div>

                    <div className="buildown-option">
                        <a onClick={this.chooseCustomize} href="#" >
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
