import React from "react";

import Swatch from './Swatch'
import './Widget.css';

// A controlled component that displays all the inputs in the color picker
// widget. Changes to these inputs update the state of its parent ColorPicker
// component. 
// It allows users to create a color with RGB values using three sliders.
// It allows users to directly enter the hex value of a color through a text input.
// Users can also pick colors from swatches:
// It provides the user with four given "theme" colors.
// It also allows users to save the current color and see it appear in the
// "Saved Colors" section for them to select later.
class Widget extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Creating a list of Swatch components from all the colors the user
    // has saved so far
    const customSwatches = this.props.savedColors.map((color, index) =>
      <Swatch
        key={index}
        givenColor={color}
        handleSwatchClick={this.props.handleSwatchClick}
      />
    );

    return (
      <div className='widget'>
        <label htmlFor="red-slider">
          R
        </label>
        <input
          type='range'
          value={this.props.redValue}
          onChange={this.props.handleRedValueChange}
          onMouseUp={this.testing}
          id='red-slider'
          min={0}
          max={255}
        />

        <label htmlFor="green-slider">
          G
        </label>
        <input
          type='range'
          value={this.props.greenValue}
          onChange={this.props.handleGreenValueChange}
          id="green-slider"
          min={0}
          max={255}
        />

        <label htmlFor="blue-slider">
          B
        </label>
        <input
          type='range'
          value={this.props.blueValue}
          onChange={this.props.handleBlueValueChange}
          id="blue-slider"
          min={0}
          max={255}
        />

        <label htmlFor=''>
          hex value #
        </label>
        <input
          type='text'
          defaultValue={this.props.currentColor}
          onBlur={this.props.handleHexInput}
          maxLength='6'
        />

        <p>Theme Colors</p>
        <div className='swatch-thumbnails'>
          <Swatch
            givenColor={'47D1FF'}
            handleSwatchClick={this.props.handleSwatchClick}
          />
          <Swatch
            givenColor={'3B67FF'}
            handleSwatchClick={this.props.handleSwatchClick}
          />
          <Swatch
            givenColor={'C348FF'}
            handleSwatchClick={this.props.handleSwatchClick}
          />
          <Swatch
            givenColor={'3FFFC7'}
            handleSwatchClick={this.props.handleSwatchClick}
          />
        </div>

        <p>Saved Colors</p>
        <div className='swatch-thumbnails'>
          {customSwatches}
        </div>

        <button
          onClick={this.props.handleSaveColor}>
          Save Color
        </button>

      </div>
    )
  }
}

export default Widget;
