import React, { Component } from 'react';
import './knob.css';
// import Knob from 'react-canvas-knob';


class Knobby extends Component {
  // state = {value: 50};

  // handleChange = (newValue) => {
  //   this.setState({value: newValue});
  // };


  render() {
    return (
      <div className="knob flex-center">
       {/*  <Knob
        value={this.state.value}
        onChange={this.handleChange}
       />*/}
      </div>
    );
  }
}

export default Knobby;
