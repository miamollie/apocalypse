import React from 'react';
import Page from '../components/page';
import DiagnosisBlock from '../components/diagnosisBlock';
import { useRouter } from 'next/router';

const Result = () => {
    const router = useRouter();
    const { stopBang, bmi, example } = router.query;
    const noRisks = !stopBang && !bmi && !example;
    //query obj keys loop instead (more extendable)

    return (
        <Page title="Result">
            {!router.query && '...'}
            {noRisks && <DiagnosisBlock test="healthyPatient" />}
            {stopBang && <DiagnosisBlock test="stopBang" />}
            {bmi && <DiagnosisBlock test="bmi" />}
            {example && <DiagnosisBlock test="example" />}
        </Page>
    );
};

export default Result;

//use nice UI state machine for all potential risk factors
