import calculateBMI from "../../utils/bmi";
import patients from "../../fixtures";

const testData = [[patients[0], 21], [patients[1], 25], [patients[2], 93]];

describe("BMI data", () => {
  test.each(testData)("given %p returns %p", (patientData, expectedResult) => {
    const result = calculateBMI(patientData);
    expect(result).toEqual(expectedResult);
  });
});
