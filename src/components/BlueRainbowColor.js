import React, { Component } from 'react'

export class BlueRainbowColor extends Component {
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
            width: '500px',
            height: '500px',
            borderColor: '#96d3fd',
            animationDelay: '.2s',
            zIndex: '3',
          }
        }
      />
    )
  }
}

export default BlueRainbowColor