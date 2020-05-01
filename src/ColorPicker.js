import React from "react";

import Widget from "./Widget";
import ColorSquare from "./ColorSquare";
import './App.css';

// This component will act as the "source of truth" and hold the state of the
// app. It uses two controlled components to display the state to users and
// lets them interact with the widget
class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: '47D1FF',
      savedColors: [],
      redValue: '71',
      greenValue: '209',
      blueValue: '255',
    };
  }

  // converts three rgb values into a hex value
  rgbToHex = (red, green, blue) => {
    let r = red.toString(16);
    let g = green.toString(16);
    let b = blue.toString(16);
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;

    return r + g + b;
  }

  // Handles changes to the "R" color slider
  handleRedValueChange = event => {
    let newRedValue = event.target.value;
    let newHex = this.rgbToHex(parseInt(newRedValue), parseInt(this.state.greenValue), parseInt(this.state.blueValue));
    this.setState({
      currentColor: newHex,
      redValue: newRedValue,
    });
  }

  // Handles changes to the "G" color slider
  handleGreenValueChange = event => {
    let newGreenValue = event.target.value;
    let newHex = this.rgbToHex(parseInt(this.state.redValue), parseInt(newGreenValue), parseInt(this.state.blueValue));
    this.setState({
      currentColor: newHex,
      greenValue: newGreenValue,
    });
  }

  // Handles changes to the "B" color slider
  handleBlueValueChange = event => {
    let newBlueValue = event.target.value;
    let newHex = this.rgbToHex(parseInt(this.state.redValue), parseInt(this.state.greenValue), parseInt(newBlueValue));
    this.setState({
      currentColor: newHex,
      blueValue: newBlueValue,
    });
  }

  // Handles changes to the hex input field
  // Validates that the user entered a valid hex code before it updates
  // the state of the widget
  handleHexInput = event => {
    const newHexValue = event.target.value;
    // Regex to validate that a valid hex code was entered
    if (/^([0-9A-F]{3}){1,2}$/i.test(newHexValue)) {
      this.setState({
        currentColor: event.target.value,
      });
    }
  }

  // Handles the user clicking on a color swatch, updates state to whatever
  // color the Swatch component was told to represent
  handleSwatchClick = newColor => {
    this.setState({
      currentColor: newColor,
    })
  }

  // Handles the user saving the current color to use again later
  // Pushes the hex value into an array in state so the app can keep track of all
  // the colors the user has saved
  handleSaveColor = event => {
    let savedColors = this.state.savedColors;
    savedColors.push(this.state.currentColor);
    this.setState({
      savedColors: savedColors,
    })
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <Widget
            currentColor={this.state.currentColor}
            savedColors={this.state.savedColors}
            redValue={this.state.redValue}
            greenValue={this.state.greenValue}
            blueValue={this.state.blueValue}
            handleRedValueChange={this.handleRedValueChange}
            handleGreenValueChange={this.handleGreenValueChange}
            handleBlueValueChange={this.handleBlueValueChange}
            handleHexInput={this.handleHexInput}
            handleSwatchClick={this.handleSwatchClick}
            handleSaveColor={this.handleSaveColor}
          />
          <ColorSquare currentColor={this.state.currentColor}/>
        </div>
      </div>
    )
  }
}

export default ColorPicker;
