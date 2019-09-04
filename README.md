# Front End Application: Body Mass Index Calculator

# Executive Summary
This project was developed and documented by Max Aubain as an exercise to practice React architectures and data flows.  An exceptional resource used for this application is the reactjs.org [Thinking in React tutorial](https://reactjs.org/docs/thinking-in-react.html).

## Goal and Specifications
A BMI calculator requires body height and weight as inputs, given in metric or imperial units.  A calculuation is involved using the inputs to produce an Index output.  The output is both a numerical value and a qualitative description.

Thinking in the framework of the above mentioned tutorial, the application is planned  as follows,
1. A hierarchy of components with static relationships,
2. Consideration of state and where it lives,
3. Implementation of 'reverse' data flow as state information is passed from children to parent components.

```
+ App
  -  methodSelect
  -  inputBiometrics
  -  displayResult to logic layer: BMIcalculator

App holds state of method, method units, and biometrics.

this.method=method.bind(this) is used to pass 'reverse' data flow through props.
```

## Local Build
To build and run this project locally, fork it to your own Github repository and clone to a local workspace.  Running `npm install` will install the required packages to the local workspace for the application and its testing suites to be functional.

```
// To start local server
$ npm run start

// To run unit tests on components and modules with Enzyme
$ npm test

// To run acceptance tests on the view with Cypress
$ npm run cy:open
```