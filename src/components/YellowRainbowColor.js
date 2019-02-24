import React, { Component } from 'react'

export class YellowRainbowColor extends Component {
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
            width: '300px',
            height: '300px',
            borderColor: '#fafa61',
            animationDelay: '.2s',
            zIndex: '5',
          }
        }
      />
    )
  }
}

export default YellowRainbowColor