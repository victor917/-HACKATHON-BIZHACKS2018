import React, { Component } from 'react';
/* make your own CSS file and import it here */

class Specifications extends Component {
  constructor() {
    super()
    this.state = {
      choice : ''
    }
  }
  render() {
    return (
        <div className="components-body">
            <div className="statement"> In particular, I care about the </div>
            <div className="p1"> (Please select your Top 3) </div>
            <div className="options-container">
              <div className="screen-option"> Screen Quality </div>
              <div className="speed-option" > Speed </div>
              <div className="battery-option" > Battery Life </div>
              <div className="storage-option" > Storage Size</div>
              <div className="weight-option" > Weight </div>
              <div className="monitor-option" > Monitor </div>
              <div className="os-option" > Operating System </div>
              <div className="ram-option" > Ram </div>
              <div className="processor-option" > Processor </div>
            </div>
            <div className="back"> Back </div>
            <div className="next"> Next </div>
        </div>
    );
  }
}

export default Specifications;
