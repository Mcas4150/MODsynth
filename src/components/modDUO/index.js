import React, { Component } from 'react';
import './modDUO.css';
import Screen from '../screen/index';
import Knob from '../knob/index';

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
          <div className="l-knob">
            <Knob/>
          </div>
          <div className="r-knob">
            <Knob/>
          </div>
          <div className="handle">
            <div className="metal-handle"></div>
          </div>
          <div className="l-button"></div>
          <div className="r-button"></div>
      </div>
    );
  }
}

export default ModDUO;
