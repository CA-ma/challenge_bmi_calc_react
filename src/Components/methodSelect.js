import React, { Component } from 'react';

/* Select component to configure BMI calculator to use imperial
or metric units and calculations */
class MethodSelect extends Component{
  render() {
    return (
      <select>
        <option>Imperial</option>
        <option>Metric</option>
      </select>
    )
  }
}

export default MethodSelect