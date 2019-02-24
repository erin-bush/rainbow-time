import React, { Component } from 'react'
import PropTypes from 'prop-types'

class RainbowColorContainer extends Component {
  constructor() {
    super()

    this.state = {
      spinning: false,
    }
  }

  toggleSpinning() {
    this.setState({ spinning: !this.state.spinning})
  }

  render() {
    const { spinning } = this.state
    const { render } = this.props

    const colorClass = spinning ? 'rotate' : null

    return (
      render(
        { 
          colorClass: colorClass,  
          toggleSpinning: this.toggleSpinning.bind(this) 
        }
      )
    )
  }
}

RainbowColorContainer.propTypes = {
  render: PropTypes.func.isRequired,
}

export default RainbowColorContainer