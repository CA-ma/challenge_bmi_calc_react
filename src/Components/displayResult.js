import React, { Component } from "react";

import { bmiCalculation } from "../Modules/BMIcalculator";

/* Shows BMI calculation result, an Index value and a qualitative description,
on the view after input of the height, weight, and method. */
class DisplayResult extends Component {
  calculate() {
    return bmiCalculation(
      this.props.weight,
      this.props.height,
      this.props.method
    );
  }

  render() {
    return <div id="response">{this.calculate()}</div>;
  }
}

export default DisplayResult;
