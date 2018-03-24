//Broken code, can use after we have user preferences

import React, {Component} from 'react'
import PartsData from './PartsData.js'


export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      //name: 'joe'
    }
    this.loopParts = this.loopParts.bind(this)
  }

  loopParts(){

    var {PartsData} = this.props

    return PartsData.map((Parts) => {
      return (<div className="col-md-3">
          <div className="parts">
            <div className="parts-img">
              <span className>
              </span>
            </div>
          </div>
        </div>
      )
    })
  }


  render() {
    return (
    <section id="" />
  )
  }
}
