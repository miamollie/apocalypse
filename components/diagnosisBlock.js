import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    avatar: props => ({
        // backgroundColor: props.result ? 'green' : 'red',
        backgroundColor: 'red',
    }),
});

const DiagnosisBlock = props => {
    const classes = useStyles(props);
    const { test, result } = props;
    const testDescription = {
        stopBang:
            'Aerobic activity arthritis dermatologist glucose hyperopia insulin iv laxatives lymph node mucus nausea stethoscope violence fluoxetine nardil pexeva quetiapine sertraline farad osmol pipe. ',
        bmi:
            'Antibiotics corticosteroids islet cells pulmonary strep screen white blood cells bar curie grain osmol wey.',
        example:
            'Allergen ct scan or cat scan ketones fluvoxamine guanfacine imipramine pamoate ludiomil methylphenidate nortriptyline tranylcypromine megadeath point tesla. Allergy shots and immunotherapy antihistamines dermatologist dust mites eeg (electroencephalogram) exhale gastroenteritis islet cells junk food lacrimal glands nearsighted stethoscope adderall clozaril duloxetine escitalopram nortriptyline paliperidone phenelzine quetiapine sertraline barleycorn furlong hand oersted therblig. ',
    }[test];

    const suggestedAction = {
        stopBang:
            'Aerobic activity arthritis dermatologist glucose hyperopia insulin iv laxatives lymph node mucus nausea stethoscope violence fluoxetine nardil pexeva quetiapine sertraline farad osmol pipe. ',
        bmi:
            'Antibiotics corticosteroids islet cells pulmonary strep screen white blood cells bar curie grain osmol wey.',
        example:
            'Allergen ct scan or cat scan ketones fluvoxamine guanfacine imipramine pamoate ludiomil methylphenidate nortriptyline tranylcypromine megadeath point tesla. Allergy shots and immunotherapy antihistamines dermatologist dust mites eeg (electroencephalogram) exhale gastroenteritis islet cells junk food lacrimal glands nearsighted stethoscope adderall clozaril duloxetine escitalopram nortriptyline paliperidone phenelzine quetiapine sertraline barleycorn furlong hand oersted therblig. ',
    }[test];

    const testName = {
        stopBang: 'Stop Bang',
        bmi: 'BMI – Body Mass Index',
        example: 'Third Example',
    }[test];

    const subheader = result ? 'Patient is at risk' : 'No risk determined';

    return (
        <Card>
            <CardHeader
                title={testName}
                subheader={subheader}
                avatar={<Avatar classes={classes.avatar} />}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                    {testDescription}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                    {suggestedAction}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default DiagnosisBlock;
