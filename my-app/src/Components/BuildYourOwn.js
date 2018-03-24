//Broken code, can use after we have user preferences

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import Filter from './Filter.js'
import Parts from './Parts.js'
import PartsData from './PartsData.js'


/* make your own CSS file and import it here */

class BuildYourOwn extends Component {
  constructor() {
    super()
    this.state = {
      populateFormsData: '',
      PartsData
    }
    // this.filteredData = this.filteredData.bind(this)
    this.populateForms = this.populateForms.bind(this)
  }

  populateForms() {
    //Processors
    var processor = this.state.PartsData.map((item)=>{
      return item.processor
    })
    processor = new Set(processor)
    processor = [...processor]

    //Motherboard
    var motherboard = this.state.PartsData.map((item)=>{
      return item.motherboard
    })
    motherboard = new Set(motherboard)
    motherboard = [...motherboard]

    //Memory
    var memory = this.state.PartsData.map((item)=>{
      return item.memory
    })
    memory = new Set(memory)
    memory = [...memory]

    //Grapics Processing Unit
    var gPU = this.state.PartsData.map((item)=>{
      return item.gPU
    })
    gPU = new Set(gPU)
    gPU = [...gPU]

    //Storage
    var storage = this.state.PartsData.map((item)=>{
      return item.storage
    })
    storage = new Set(storage)
    storage = [...storage]

    //Power Supply
    var powerSupply = this.state.PartsData.map((item)=>{
      return item.powerSupply
    })
    powerSupply = new Set(powerSupply)
    powerSupply = [...powerSupply]

    //Case
    var computerCase = this.state.PartsData.map((item)=>{
      return item.computerCase
    })
    computerCase = new Set(computerCase)
    computerCase = [...computerCase]

    this.setState({
      populateFormsData: {
        processor,
        motherboard,
        gPU,
        storage,
        powerSupply,
        computerCase,
      }
    }, ()=>{
      (this.state)
    })
  }

  render(){
    return(<div>
      <Header />
      <section id="content-area">
        <Filter change={this.change} globalState={this.setState}
        populateAction={this.populateForms}/>
        <Parts PartsData={this.state.filteredDate} />
      </section>
      </div>)
  }
}

// const buildYourOwn = document.getElementById('buildYourOwn')
//
// ReactDOM.render(<BuildYourOwn/>, buildYourOwn)




export default BuildYourOwn;
