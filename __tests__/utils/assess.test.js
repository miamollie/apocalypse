import calculateStopBang from "../../utils/assess";

const testData = [
  [
    { height: 170, weight: 60, male: true, age: 52, neckCircumference: 45 },
    true
  ]
  //   [{ height: 200, weight: 100 }, 25],
  //   [{ height: 180, weight: 300 }, 93]
];

describe("Stop Bang assessment", () => {
  test.each(testData)("given %p returns %p", (patientData, expectedResult) => {
    const result = calculateStopBang(patientData);
    expect(result).toEqual(expectedResult);
  });
});
