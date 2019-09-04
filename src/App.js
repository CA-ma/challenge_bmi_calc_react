import React, { Component } from "react";

import DisplayResult from "./Components/displayResult";
import MethodSelect from "./Components/methodSelect";

import "./style/App.css";
import InputBiometrics from "./Components/inputBiometrics";

class App extends Component {
  constructor() {
    super();
    this.state = {
      weight: "",
      height: "",
      method: "metric",
      weightUnits: "kg",
      heightUnits: "cm"
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleWeightInput = this.handleWeightInput.bind(this);
    this.handleHeightInput = this.handleHeightInput.bind(this);
  }

  handleSelectChange(selectorTarget) {
    this.setState({
      method: selectorTarget
    });
    selectorTarget === "imperial"
      ? this.setState({ weightUnits: "lbs", heightUnits: "inches" })
      : this.setState({ weightUnits: "kg", heightUnits: "cm" });
  }

  handleWeightInput(inputTarget) {
    this.setState({
      weight: inputTarget
    });
  }

  handleHeightInput(inputTarget) {
    this.setState({
      height: inputTarget
    });
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div>
            <h1>BMI Calculator</h1>
          </div>

          <div>
            <MethodSelect onSelectChange={this.handleSelectChange} />
          </div>

          <div>
            <InputBiometrics
              onWeightInput={this.handleWeightInput}
              weightUnits={this.state.weightUnits}
              onHeightInput={this.handleHeightInput}
              heightUnits={this.state.heightUnits}
            />
          </div>

          <DisplayResult
            method={this.state.method}
            weight={this.state.weight}
            height={this.state.height}
          />
        </div>
      </div>
    );
  }
}

export default App;
