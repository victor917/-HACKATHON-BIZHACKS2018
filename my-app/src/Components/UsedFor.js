import React, { Component } from 'react';
/* make your own CSS file and import it here */

class UsedFor extends Component {
  constructor() {
    super()
    this.state = {
      choice : ''
    }
  }
  render() {
    return (
        <div className="components-body">
            <div className="statement">I want to use it for </div>
            <div className="options-container">
              <div className={"UsedFor-options, design-option"}> Design </div>
              <div className="schoolwork-option" > School/Work </div>
              <div className="leisure-option" > Leisure </div>
              <div className="gaming-option" > Gaming </div>
            </div>
        </div>
    );
  }
}

export default UsedFor;
