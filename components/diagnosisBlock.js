import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const DiagnosisBlock = ({ test, result }) => {
    const copy = {
        stopBang: 'A message about a positive result from the stop bang thing',
        bmi: 'bmi...',
        thirdTest: 'derp derp derp derp',
    }[test];

    // how to indicate pass/fail in the ui?
    return (
        <Card>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    {copy}
                    <br />
                    {result}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default DiagnosisBlock;
