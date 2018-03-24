//Broken code, can use after we have user preferences


import React, {Component} from 'react'

export default class Filter extends Component {
  constructor(){
    super()
    this.state ={
      // name: 'Joe'
    }
    this.processor = this.processor.bind(this)
    this.motherboard = this.motherboard.bind(this)
    this.gPU = this.gPU.bind(this)
    this.storage = this.storage.bind(this)
    this.powerSupply = this.powerSupply.bind(this)
    this.computerCase = this.computerCase.bind(this)
  }
  componentWillMount(){
    this.props.populateAction()
  }
  processor(){
    if(this.props.globalState.populateFormsData.processor != undefined) {
    var {processor} = this.props.globalState.populateFormsData
      return processor.map((item) => {
        return(
          <option key={item} value={item}>{item}</option>
        )
      })
    }
  }
  motherboard(){
    if(this.props.globalState.populateFormsData.motherboard != undefined) {
    var {motherboard} = this.props.globalState.populateFormsData
      return motherboard.map((item) => {
        return(
          <option key={item} value={item}>{item}</option>
        )
      })
    }
  }
  gPU(){
    if(this.props.globalState.populateFormsData.gPU != undefined) {
    var {gPU} = this.props.globalState.populateFormsData
      return gPU.map((item) => {
        return(
          <option key={item} value={item}>{item}</option>
        )
      })
    }
  }
  storage(){
    if(this.props.globalState.populateFormsData.storage != undefined) {
    var {storage} = this.props.globalState.populateFormsData
      return storage.map((item) => {
        return(
          <option key={item} value={item}>{item}</option>
        )
      })
    }
  }
  powerSupply(){
    if(this.props.globalState.populateFormsData.powerSupply != undefined) {
    var {powerSupply} = this.props.globalState.populateFormsData

      return powerSupply.map((item) => {
        return(
          <option key={item} value={item}>{item}</option>
        )
      })
    }
  }
  computerCase(){
    if(this.props.globalState.populateFormsData.computerCase != undefined) {
    var {computerCase} = this.props.globalState.populateFormsData

      return computerCase.map((item) => {
        return(
          <option key={item} value={item}>{item}</option>
        )
      })
    }
  }
  render(){
    return(<section id="filter">
      <div className="inside">
      <h4>Filter</h4>
    <label htmlFor="processor">Processor</label>
    <select name="processor" className="filters processor"
    onChange={this.props.change}>
    <option value="All">All</option>
      {this.processor()}
    </select>
    <label htmlFor="motherboard">Motherboard</label>
    <select name="motherboard" className="filters motherboard"
    onChange={this.props.change}>
    <option value="All">All</option>
      {this.motherboard()}
    </select>
    <label htmlFor="gPU">GPU</label>
    <select name="gPU" className="filters gPU"
    onChange={this.props.change}>
    <option value="All">All</option>
      {this.gPU()}
    </select>
    <label htmlFor="storage">Storage</label>
    <select name="storage" className="filters storage"
    onChange={this.props.change}>
    <option value="All">All</option>
      {this.storage()}
    </select>
    <label htmlFor="powerSupply">Power Supply</label>
    <select name="powerSupply" className="filters powerSupply"
    onChange={this.props.change}>
    <option value="All">All</option>
      {this.powerSupply()}
    </select>
    <label htmlFor="computerCase">Computer Case</label>
    <select name="computerCase" className="filters computerCase"
    onChange={this.props.change}>
    <option value="All">All</option>
      {this.computerCase()}
    </select>
    </div>
  </section>
)
  }

}
