import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Switch from '@material-ui/core/Switch';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import calculateStopBang from '../utils/assess';
import { useState } from 'react';
import { PatientData } from '../types';

export default function Form() {
    const initialValues: PatientData = {
        height: 0,
        weight: 0,
        age: 0,
        neckCircumference: 0,
        male: false,
        highBloodPressure: false,
        snore: false,
        dailyFatigue: false,
        sleepChoking: false,
        sleepApnoea: false,
    };

    const [values, setValues] = useState(initialValues);

    const handleChangeSwitch = (name: string) => (event: React.ChangeEvent<{ checked: any }>) => {
        setValues({ ...values, [name]: event.target.checked });
    };

    const handleChange = (name: string) => (
        event: React.ChangeEvent<{ value: any }> | React.ChangeEvent<HTMLSelectElement>
    ) => {
        const val = event.target.value;
        const casteVal = typeof val === 'boolean' ? val : parseInt(val, 10);
        setValues({ ...values, [name]: casteVal });
    };

    const reset = () => {
        setValues({ ...initialValues });
    };

    return (
        <form
            style={{ padding: '30px' }}
            onSubmit={e => {
                e.preventDefault();
                calculateStopBang(values);
            }}
        >
            <Typography variant="h6" gutterBottom>
                Enter patient details
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TextField
                        id="age"
                        label="Age"
                        value={values.age}
                        onChange={handleChange('age')}
                        type="number"
                        required
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormControl>
                        <InputLabel htmlFor="male">Gender</InputLabel>
                        <Select
                            value={values.male}
                            onChange={handleChange('male')}
                            inputProps={{
                                name: 'male',
                                id: 'male',
                            }}
                        >
                            <MenuItem value="female">Female</MenuItem>
                            <MenuItem value="male">Male</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        id="weight"
                        label="Weight"
                        value={values.weight}
                        onChange={handleChange('weight')}
                        type="number"
                        required
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        id="height"
                        label="Height"
                        value={values.height}
                        onChange={handleChange('height')}
                        type="number"
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="neckCircumference"
                        label="Neck Circumference"
                        value={values.neckCircumference}
                        onChange={handleChange('neckCircumference')}
                        type="number"
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Switch
                                color="secondary"
                                name="highBloodPressure"
                                checked={values.highBloodPressure}
                                value="highBloodPressure"
                                onChange={handleChangeSwitch('highBloodPressure')}
                            />
                        }
                        label="Heigh blood pressure"
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Switch
                                color="secondary"
                                name="snore"
                                checked={values.snore}
                                value="snore"
                                onChange={handleChangeSwitch('snore')}
                            />
                        }
                        label="Snore"
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Switch
                                color="secondary"
                                name="dailyFatigue"
                                checked={values.dailyFatigue}
                                value="dailyFatigue"
                                onChange={handleChangeSwitch('dailyFatigue')}
                            />
                        }
                        label="Daily Fatigue"
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Switch
                                color="secondary"
                                name="sleepChoking"
                                checked={values.sleepChoking}
                                value="sleepChoking"
                                onChange={handleChangeSwitch('sleepChoking')}
                            />
                        }
                        label="Sleep choking"
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Switch
                                color="secondary"
                                name="sleepApnoea"
                                checked={values.sleepApnoea}
                                value="sleepApnoea"
                                onChange={handleChangeSwitch('sleepApnoea')}
                            />
                        }
                        label="Sleep Apnoea"
                    />
                </Grid>
            </Grid>
            <Button color="primary" fullWidth size="large" type="submit">
                Calculate Risk
            </Button>
            <Button color="secondary" fullWidth size="large" onClick={reset}>
                Reset
            </Button>
        </form>
    );
}
