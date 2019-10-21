import { Dimensions } from '../types';

// Calculation: [weight (kg) / height (cm) / height (cm)] x 10,000
export default function calculateBMI({ height, weight }: Dimensions) {
    return Math.round((weight / (height * height)) * 10000);
}
