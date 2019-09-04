import React, { Component } from "react";

import DisplayResult from "./components/displayResult";
import MethodSelect from "./components/methodSelect";

import "./style/App.css";

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
  }

  handleSelectChange(selectorTarget) {
    this.setState({
      method: selectorTarget
    });
    (selectorTarget == "imperial")
      ? this.setState({ weightUnits: "lbs", heightUnits: "inches" })
      : this.setState({ weightUnits: "kg", heightUnits: "cm" });
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>BMI Calculator</h1>
        </div>

        <div>
          <MethodSelect onSelectChange={this.handleSelectChange} />
        </div>

        <div>
          <label>Weight({this.state.weightUnits})</label>
          <input
            name="weight"
            value={this.state.weight}
            onChange={e => this.setState({ weight: e.target.value })}
          />
        </div>

        <div>
          <label>Height({this.state.heightUnits})</label>
          <input
            name="height"
            value={this.state.height}
            onChange={e => this.setState({ height: e.target.value })}
          />
        </div>

        <DisplayResult method={this.state.method} weight={this.state.weight} height={this.state.height} />
      </div>
    );
  }
}

export default App;
