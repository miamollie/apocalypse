import calculateBMI from "./bmi";

const riskFactors = ["heighBloodPressure", "male", "smoker"];

export default function calculateStopBang({
  age,
  height,
  weight,
  neckCircumference,
  gender,
  ...data
}) {
  let res = 0;
  const bmi = calculateBMI({ height, weight });
  if (bmi > 35) res++;
  if (neckCircumference > 43) res++;
  if (age > 50) res++;

  riskFactors.forEach(f => {
    if (data[f]) res++;
  });

  return res >= 3;
}
