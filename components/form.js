import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import calculateStopBang from "../utils/assess";
import { useState } from "react";

export default function Form() {
  const initialValues = {
    height: "",
    weight: "",
    gender: false,
    age: "",
    neckCircumference: ""
  };

  const handleChangeSwitch = name => event => {
    setValues({ ...values, [name]: event.target.checked });
  };

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  //reset form

  const reset = () => {
    setValues({ ...initialValues });
  };

  const [values, setValues] = useState(initialValues);

  return (
    <form
      style={{ padding: "30px" }}
      onSubmit={e => {
        e.preventDefault();
        calculateStopBang(values);
      }}
    >
      <Typography variant="h6" gutterBottom>
        Enter patient details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="age"
            label="Age"
            value={values.age}
            onChange={handleChange("age")}
            type="number"
            required
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="weight"
            label="Weight"
            value={values.weight}
            onChange={handleChange("weight")}
            type="number"
            required
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="height"
            label="Height"
            value={values.height}
            onChange={handleChange("height")}
            type="number"
            required
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="neckCircumference"
            label="Neck"
            value={values.neckCircumference}
            onChange={handleChange("neckCircumference")}
            type="number"
            required
          />
        </Grid>
        <Grid item xs={6}>
          <FormControlLabel
            control={
              <Switch
                color="secondary"
                name="gender"
                checked={values.gender}
                value="gender"
                onChange={handleChangeSwitch("gender")}
              />
            }
            label="Male or female" //todo: nicer way to display in UI
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Switch
                color="secondary"
                name="b"
                checked={values.b}
                value="b"
                onChange={handleChangeSwitch("b")}
              />
            }
            label="Drugs"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Switch
                color="secondary"
                name="c"
                checked={values.c}
                value="c"
                onChange={handleChangeSwitch("c")}
              />
            }
            label="Smoker"
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
