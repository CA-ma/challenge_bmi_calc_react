/* Return body mass index value for a given height, weight, 
and set of units (imperial or metric) */
export const bmiCalculation = (weight, height, method) => {
  parseFloat(weight);
  parseFloat(height);
  let bmi;

  weight = isNaN(weight) ? 0 : weight;
  height = isNaN(height) ? 0 : height;

  method === "metric"
    ? (bmi = weight / (((height / 100) * height) / 100))
    : (bmi = (703 * weight) / (height * height));

  let finalBMI = parseFloat(bmi.toFixed(2));
  let BMIMessage = setBMIMessage(finalBMI);
  if (isNaN(finalBMI) || !isFinite(finalBMI) || finalBMI === 0) {
    return "";
  } else {
    return `You are ${BMIMessage} with a BMI of ${finalBMI}`;
  }
};

/* Qualitatative BMI description */
const setBMIMessage = finalBMI => {
  if (finalBMI < 18.5) {
    return "Underweight";
  } else if (finalBMI > 18.5 && finalBMI < 25) {
    return "Normal";
  } else if (finalBMI > 25 && finalBMI < 30) {
    return "Overweight";
  } else if (finalBMI > 30) {
    return "Obese";
  }
};
