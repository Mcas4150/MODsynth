import React, { Component } from 'react';
import './modDUO.css';
import Screen from '../screen/index';

class ModDUO extends Component {
  render() {
    return (
       <div className="DUO">
          <div className="l-screen">
            <Screen/>
          </div>
          <div className="r-screen">
            <Screen/>
          </div>
          <div className="l-knob"></div>
          <div className="r-knob"></div>
          <div className="handle"></div>
          <div className="l-button"></div>
          <div className="r-button"></div>
      </div>
    );
  }
}

export default ModDUO;
