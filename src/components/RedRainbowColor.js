import React, { Component } from 'react'
import RainbowColorContainer from './RainbowColorContainer'

export class RedRainbowColor extends Component {
  renderRedColor({ colorClass, toggleSpinning }) {
    return (
      <li
        onClick={toggleSpinning}
        className={colorClass}
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

  render() {
    return (
      <RainbowColorContainer 
        render={this.renderRedColor}
      />
    )
  }
}

export default RedRainbowColor