import React, { Component } from 'react';
import './App.css';
import Synthesizer from '../synthesizer/index';
import ModDUO from '../modDUO/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Synthesizer/>
        <ModDUO/>
      </div>
    );
  }
}

export default App;
