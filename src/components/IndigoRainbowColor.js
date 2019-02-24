import React, { Component } from 'react'

export class IndigoRainbowColor extends Component {
  constructor() {
    super()

    this.state = {
      spinning: false,
    }
  }

  makeItSpin() {
    this.setState({ spinning: !this.state.spinning})
  }

  render() {
    const { spinning } = this.state

    const rainbowColourClasses = spinning ? 'rotate' : null

    return (
      <li
        onClick={this.makeItSpin.bind(this)}
        className={rainbowColourClasses}
        style={
          {	
            width: '600px',
            height: '600px',
            borderColor: '#9696fd',
            animationDelay: '.2s',
            zIndex: '2',
          }
        }
      />
    )
  }
}

export default IndigoRainbowColor