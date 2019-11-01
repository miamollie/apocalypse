import React from 'react';
import Page from '../components/page';
import DiagnosisBlock from '../components/diagnosisBlock';
import { useRouter } from 'next/router';

const Result = () => {
    const router = useRouter();
    const { stopBang, bmi, example } = router.query;
    //query obj keys loop instead (more extendable..?)

    return (
        <Page title="Result">
            {!Object.keys(router.query).length &&
                'No result... try searching or add a new patient Here'}
            {/* periop in a dropdown e.g. recommended tests. Open if Exists data, closed otherwise. */}
            {stopBang && <DiagnosisBlock result={stopBang} test="stopBang" />}
            {bmi && <DiagnosisBlock result={bmi} test="bmi" />}
            {example && <DiagnosisBlock result={example} test="example" />}
            {/* other stuff relevant to operating theatre in a dropdown */}
        </Page>
    );
};

export default Result;

//use nice UI state machine for all potential risk factors
