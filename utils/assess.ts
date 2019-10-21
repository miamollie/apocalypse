import calculateBMI from './bmi';
import { PatientData, RiskFactors } from '../types';

const riskFactors: RiskFactors[] = [
    'highBloodPressure',
    'male',
    'snore',
    'sleepChoking',
    'dailyFatigue',
    'sleepApnoea',
]; //todo be smarter about this

export default function calculateStopBang({
    age,
    height,
    weight,
    neckCircumference,
    ...data
}: PatientData) {
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
