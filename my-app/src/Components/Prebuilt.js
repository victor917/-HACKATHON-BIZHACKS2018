import React, { Component } from 'react';
/* make your own CSS file and import it here */

class Prebuilt extends Component {
  constructor() {
    super()
    this.state = {
      choice : ''
    }
  }
  render() {
    return (
        <div className="components-body">
            <div className="statement">I am looking for a </div>
            <div className="options-container">
              <div className="laptop-option"> Laptop </div>
              <div className="pc-option"> PC </div>
            </div>
        </div>
    );
  }
}

export default Prebuilt;
