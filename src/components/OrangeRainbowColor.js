import React, { Component } from 'react'

export class OrangeRainbowColor extends Component {
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
            width: '200px',
            height: '200px',
            borderColor: '#fdc996',
            animationDelay: '.2s',
            zIndex: '6',
          }
        }
      />
    )
  }
}

export default OrangeRainbowColor