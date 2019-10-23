import React from 'react';

const DiagnosisBlock = ({ test }) => {
    const copy = {
        healthyPatient: 'Patient has no risks.',
        stopBang: 'A message about a positive result from the stop bang thing',
        bmi: 'bmi...',
        thirdTest: 'derp derp derp derp',
    }[test];
    return <article>{copy}</article>;
};

//use the nextJS css in js style in material doesnt have something

export default DiagnosisBlock;
