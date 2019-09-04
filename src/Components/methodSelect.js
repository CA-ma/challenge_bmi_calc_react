import React, { Component } from "react";

/* Select component to configure BMI calculator to use imperial
or metric units and calculations */
class MethodSelect extends Component {
  constructor(props) {
    super(props);
    this.handleSelectChange = this.handleSelectChange.bind(this)
  }

  handleSelectChange(event) {
    this.props.onSelectChange(event.target.value);
  }

  render() {
    return (
      <select id="method" onChange={this.handleSelectChange}>
        <option value="metric">metric</option>
        <option value="imperial">imperial</option>
      </select>
    );
  }
}

export default MethodSelect;
