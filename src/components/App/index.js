import React, { Component } from 'react';
import './App.css';
import "../../styles/global.css"
import Synthesizer from '../synthesizer/index';
import ModDUO from '../modDUO/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="instruments flex-center">
          <ModDUO/>
        </div>
      </div>
    );
  }
}

export default App;
