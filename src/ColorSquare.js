import React from "react";

import './ColorSquare.css';

// A controlled component to display to users the current color they have chosen,
// designed to look like the paint chips/samples from a home improvement store.
// Its background color and displayed hex value are inherited from the
// ColorPicker component, and are updated as the state of the app is updated.
class ColorSquare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='paint-chip'>
        <div className='paint-chip--color' style={{backgroundColor: "#" + this.props.currentColor}} />
        <div className='paint-chip--label'>
          <p>#{this.props.currentColor}</p>
        </div>
      </div>
    )
  }
}

export default ColorSquare;
