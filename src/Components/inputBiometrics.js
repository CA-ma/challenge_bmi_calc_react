import React, { Component } from "react";

class InputBiometrics extends Component {
  constructor(props) {
    super(props);
    this.handleWeightInput = this.handleWeightInput.bind(this);
    this.handleHeightInput = this.handleHeightInput.bind(this);
  }

  handleWeightInput(event) {
    this.props.onWeightInput(event.target.value)
  }

  handleHeightInput(event) {
    this.props.onHeightInput(event.target.value)
  }

  render() {
    return (
      <>
        <div>
          <label>Weight({this.props.weightUnits})</label>
          <input
            name="weight"
            onChange={this.handleWeightInput}
            className="biometrics"
          />
        </div>

        <div>
          <label>Height({this.props.heightUnits})</label>
          <input
            name="height"
            onChange={this.handleHeightInput}
            className="biometrics"
          />
        </div>
      </>
    );
  }
}

export default InputBiometrics;
