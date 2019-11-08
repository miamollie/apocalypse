import calculateStopBang from '../../utils/assess';
import patients from '../../fixtures';

const testData = [
    [patients[0], true],
    [patients[1], true],
    [patients[2], true],
    [patients[3], true],
    [patients[4], true],
];

describe('Stop Bang assessment', () => {
    test.each(testData)('given %p returns %p', (patientData, expectedResult) => {
        const result = calculateStopBang(patientData);
        expect(result).toEqual(expectedResult);
    });
});
