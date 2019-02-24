import React, { Component } from 'react'
import RedRainbowColor from './components/RedRainbowColor'
import OrangeRainbowColor from './components/OrangeRainbowColor'
import YellowRainbowColor from './components/YellowRainbowColor'
import GreenRainbowColor from './components/GreenRainbowColor'
import BlueRainbowColor from './components/BlueRainbowColor'
import IndigoRainbowColor from './components/IndigoRainbowColor'
import VioletRainbowColor from './components/VioletRainbowColor'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <RedRainbowColor />
          <OrangeRainbowColor />
          <YellowRainbowColor />
          <GreenRainbowColor />
          <BlueRainbowColor />
          <IndigoRainbowColor />
          <VioletRainbowColor />
        </ul>
        <div className="explainer">
          <h3>Click on a color of the rainbow to make it spin!</h3>
        </div>
      </div>
    );
  }
}

export default App
