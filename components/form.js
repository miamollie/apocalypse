import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import assess from "../utils/assess";
import { useState } from "react";

export default function Form() {
  const initialValues = {
    a: false,
    b: false,
    c: false,
    age: ""
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
        assess(values);
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
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Switch
                color="secondary"
                name="a"
                checked={values.a}
                value="a"
                onChange={handleChangeSwitch("a")}
              />
            }
            label="True or false thing"
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
