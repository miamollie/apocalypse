// Calculation: [weight (kg) / height (cm) / height (cm)] x 10,000
export default function calculateBMI({ height, weight }) {
  return (weight / (height * height)) * 10000;
}
