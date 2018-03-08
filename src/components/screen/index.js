import React, { Component } from 'react';
import "./screen.css";


class Screen extends Component {
  render() {
    return (
      <div className="screen">
        <div className="display">
          <div className="top-panel">
            <div className="parameter-name">DELAY TIME</div>
            <div className="parameter-id">01</div>
          </div>
          <div className="center-panel">
            <div className="visual"></div>
          </div>
          <div className="bottom-panel">
            <div className="module-name">STEREO ECHO</div>
            <div className="module-info">ON</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Screen;
