import React from "react";

import './Swatch.css';

// A controlled component to represent a color swatch in the color picker.
// It is created with a givenColor. When the user clicks the Swatch it
// updates the parent ColorPicker component's state to display its givenColor.
class Swatch extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = event => {
    this.props.handleSwatchClick(this.props.givenColor);
  }

  render() {
    return (
      <div
        className='swatch'
        style={{backgroundColor: "#" + this.props.givenColor}}
        onClick={this.handleClick}
      />
    )
  }
}

export default Swatch;
