import React, { Component } from 'react';

import { bmiCalculation } from '../modules/BMIcalculator';

/* Shows BMI calculation result, an Index value and a qualitative description,
on the view after input of the height, weight, and method. */
class DisplayResult extends Component {
  calculate() {
    var weight= this.props.weight;
    var height= this.props.height;

    return bmiCalculation(weight, height);
  }

  render() {
    return (
      <div id='response'>
        {this.calculate()}
      </div>
    )
  }
}

export default DisplayResult