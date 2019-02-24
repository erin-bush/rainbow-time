import React, { Component } from 'react'

export class RedRainbowColor extends Component {
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
            width: '100px',
            height: '100px',
            borderColor: '#fd96aa',
            animationDelay: '.2s',
            zIndex: '7',
          }
        }
      />
    )
  }
}

export default RedRainbowColor