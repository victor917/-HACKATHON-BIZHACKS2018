import React, { Component } from 'react';
import {inputData} from '../inputData.js';
import pc from '../Images/Flat-PC.png';
import laptop from '../Images/Flat-laptop-icon.jpg';

class BuildPart1 extends Component {
    constructor() {
        super();

        this.chooseLaptop = this.chooseLaptop.bind(this);
        this.chooseDesktop = this.chooseDesktop.bind(this);
    }

    chooseLaptop() {
        inputData.addUrlParameter("categoryPath", "(categoryPath.id=abcat0502000)");
        inputData.add("type", "laptop");
        this.props.func("usedForPage");
    }

    chooseDesktop() {
        inputData.add("type", "desktop");
        this.props.func("customizePage");
    }

    render() {
        return (
            <div className="components-body">

                <div className="statement">I am looking for a </div>

                <div className="options-container two-options">
                    <div className="laptop-option">
                        <a onClick={this.chooseLaptop} href="#" >
                            <img src={laptop} />
                        </a>
                        <div className="laptop-text"> Laptop </div>
                    </div>

                    <div className="pc-option">
                        <a onClick={this.chooseDesktop} href="#" >
                            <img src={pc} />
                        </a>

                        <div className="pc-text"> Desktop </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default BuildPart1;
