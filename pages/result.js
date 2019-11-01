import React from 'react';
import Page from '../components/page';
import DiagnosisBlock from '../components/diagnosisBlock';
import { useRouter } from 'next/router';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';

const Result = () => {
    const router = useRouter();
    const { stopBang, bmi, example } = router.query;
    //query obj keys loop instead (more extendable..?)

    return (
        <Page title="Result">
            {!Object.keys(router.query).length ? (
                <Typography>
                    No result. Submit new patient
                    <Link href="/">
                        <a>here</a>
                    </Link>
                </Typography>
            ) : (
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <ExpansionPanel>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography variant="h5" gutterBottom>
                                    Preop considerations
                                </Typography>
                                {/* https://material-ui.com/components/badges/  */}
                                {/* TODO include pass fail count in summary? */}
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <DiagnosisBlock result={stopBang} test="stopBang" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <DiagnosisBlock result={bmi} test="bmi" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <DiagnosisBlock result={example} test="example" />
                                    </Grid>
                                </Grid>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Grid>

                    <Grid item xs={12}>
                        <ExpansionPanel>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography variant="h5" gutterBottom>
                                    Postop considerations
                                </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <DiagnosisBlock result={stopBang} test="stopBang" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <DiagnosisBlock result={bmi} test="bmi" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <DiagnosisBlock result={example} test="example" />
                                    </Grid>
                                </Grid>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Grid>
                </Grid>
            )}
        </Page>
    );
};

export default Result;

//use nice UI state machine for all potential risk factors
