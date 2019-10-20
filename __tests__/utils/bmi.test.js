import calculateBMI from "../../utils/bmi";

const testData = [
  //patient data, result
  [{ height: 170, weight: 60 }, 21],
  [{ height: 200, weight: 100 }, 25],
  [{ height: 180, weight: 300 }, 93]
];

describe("BMI data", () => {
  test.each(testData)("given %p returns %p", (patientData, expectedResult) => {
    const result = calculateBMI(patientData);
    expect(result).toEqual(expectedResult);
  });
});
