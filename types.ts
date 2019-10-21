export interface PatientData extends Dimensions {
    age: number;
    neckCircumference: number;
    highBloodPressure: boolean;
    male: boolean;
    snore: boolean;
    sleepChoking: boolean;
    dailyFatigue: boolean;
    sleepApnoea: boolean;
}

export interface Dimensions {
    height: number;
    weight: number;
}
