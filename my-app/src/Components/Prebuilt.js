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
            <div id="Laptop-option" className="prebuilt-options"> Laptop </div>
            <div id="PC-option" className="prebuilt-options"> PC </div>
        </div>
    );
  }
}

export default Prebuilt;
