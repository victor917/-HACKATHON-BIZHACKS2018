import React, { Component } from 'react';
import {inputData} from '../inputData.js';

import gamingicon from '../Images/gaming.jpg';
import designicon from '../Images/design-icon.jpg';
import schoolworkicon from '../Images/schoolwork-icon.jpg';
import leisureicon from '../Images/leisure.jpg';

class UsedFor extends Component {
    constructor() {
        super();

        this.chooseGaming = this.chooseGaming.bind(this);
        this.chooseDesign = this.chooseDesign.bind(this);
        this.chooseWork = this.chooseWork.bind(this);
        this.chooseCasual = this.chooseCasual.bind(this);
    }

    chooseGaming() {
        inputData.add("purpose", "gaming");
        if (inputData.filters["type"] === 'laptop') {
            inputData.addUrlParameter("keyword", "(search=alienware)");
        } else {
            inputData.addUrlParameter("keyword", "(search=gaming)");
        }



        /*if (inputData.filters["customizable"] === 'prebuilt' || inputData.filters["type"] === 'laptop')  {
            inputData.addUrlParameter("keyword", "(search=gaming)");
        }*/

        this.props.func("specifications");
    }

    chooseDesign() {
        inputData.add("purpose", "design");
        this.props.func("specifications");
    }

    chooseWork() {
        inputData.add("purpose", "school/work");
        this.props.func("specifications");
    }

    chooseCasual(event) {
        inputData.add("purpose", "leisure");
        this.props.func("specifications");
    }

    render() {
        return (
            <div className="components-body">
                <div className="statement">Select Purpose</div>
                <div className="options-container four-options">
                    <div className="gaming-option">
                        <a onClick={this.chooseGaming} href="#" >
                            <img src={gamingicon} />
                        </a>
                        <div className="gaming-text"> Gaming </div>
                    </div>

                    <div className="design-option">
                        <a onClick={this.chooseDesign} href="#" >
                            <img src={designicon} />
                        </a>
                        <div className="design-text"> Design </div>
                    </div>

                    <div className="schoolwork-option">
                        <a onClick={this.chooseWork} href="#" >
                            <img src={schoolworkicon} />
                        </a>
                        <div className="schoolwork-text"> School/Work </div>
                    </div>
                    <div className="leisure-option">
                        <a onClick={this.chooseCasual} href="#" >
                            <img src={leisureicon} />
                        </a>
                        <div className="leisure-text"> Leisure </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default UsedFor;
