import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
  checkboxText: {
    fontSize: "1rem",
    color: theme.palette.common.orange,
  },
  checkBoxStyle: {
    color: theme.palette.common.orange,
  },
  radio: {
    color: theme.palette.common.orange,
  },
  label: {
    fontSize: "1rem",
    color: theme.palette.common.orange,
  },
  cancelButton: {
    ...theme.typography.h5,
    color: theme.palette.common.orange,
    fontSize: "1rem",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

export default function Fees({ setDialogOpen }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const [checkedDays, setCheckedDays] = useState("");

  const [checkedHours, setCheckedHours] = useState("");

  const handleDaysChange = (event) => {
    setCheckedDays(event.target.value);
  };

  const handleHoursChange = (event) => {
    setCheckedHours(event.target.value);
  };

  const estimate = () => {
    return Number(checkedDays) * Number(checkedHours);
  };

  return (
    <DialogContent>
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            {/* ---- Title Block ----- */}
            <Grid
              item
              container
              justifyContent="center"
              style={{ marginBottom: "1em" }}
            >
              <Typography variant="h2" align="center">
                School Fees 2021 - 2022
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/* ---- Fee Information Block ----- */}
        <Grid container direction="column">
          <Grid item align="center">
            <Typography variant="h4">Fee Estimate Calculator</Typography>
          </Grid>
          <Grid
            item
            sm
            container
            direction="column"
            style={{ marginTop: "1em" }}
          >
            <FormControl>
              <Typography
                variant="subtitle1"
                style={{ color: theme.palette.common.blue }}
              >
                How many days per week
              </Typography>
              <RadioGroup
                aria-label="days"
                name="days"
                value={checkedDays}
                onChange={handleDaysChange}
              >
                <FormControlLabel
                  classes={{ label: classes.label }}
                  value="1"
                  control={
                    <Radio
                      classes={{ root: classes.radio }}
                      color="primary"
                      size="small"
                    />
                  }
                  label="1 day per week"
                />
                <FormControlLabel
                  classes={{ label: classes.label }}
                  value="2"
                  control={
                    <Radio
                      classes={{ root: classes.radio }}
                      color="primary"
                      size="small"
                    />
                  }
                  label="2 days per week"
                />
                <FormControlLabel
                  classes={{ label: classes.label }}
                  value="3"
                  control={
                    <Radio
                      classes={{ root: classes.radio }}
                      color="primary"
                      size="small"
                    />
                  }
                  label="3 days per week"
                />
                <FormControlLabel
                  classes={{ label: classes.label }}
                  value="4"
                  control={
                    <Radio
                      classes={{ root: classes.radio }}
                      color="primary"
                      size="small"
                    />
                  }
                  label="4 days per week"
                />
                <FormControlLabel
                  classes={{ label: classes.label }}
                  value="5"
                  control={
                    <Radio
                      classes={{ root: classes.radio }}
                      color="primary"
                      size="small"
                    />
                  }
                  label="5 days per week"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid
            item
            sm
            container
            direction="column"
            style={{ marginTop: "1em" }}
          >
            <FormControl>
              <Typography
                variant="subtitle1"
                style={{ color: theme.palette.common.blue }}
              >
                How many hours day
              </Typography>
              <RadioGroup
                aria-label="hours"
                name="hours"
                value={checkedHours}
                onChange={handleHoursChange}
              >
                <FormControlLabel
                  classes={{ label: classes.label }}
                  value="25"
                  control={
                    <Radio
                      classes={{ root: classes.radio }}
                      color="primary"
                      size="small"
                    />
                  }
                  label="Core Morning (8:45am - 12:00pm)"
                />
                <FormControlLabel
                  classes={{ label: classes.label }}
                  value="30"
                  control={
                    <Radio
                      classes={{ root: classes.radio }}
                      color="primary"
                      size="small"
                    />
                  }
                  label="Core Afternoon (12:00pm - 3:45pm)"
                />
                <FormControlLabel
                  classes={{ label: classes.label }}
                  value="50"
                  control={
                    <Radio
                      classes={{ root: classes.radio }}
                      color="primary"
                      size="small"
                    />
                  }
                  label="Core Full Day (8:45am - 3:30pm)"
                />
                <FormControlLabel
                  classes={{ label: classes.label }}
                  value="70"
                  control={
                    <Radio
                      classes={{ root: classes.radio }}
                      color="primary"
                      size="small"
                    />
                  }
                  label="Core Full Day + Extra AM + PM (7:45am - 6:30pm)"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/* ---- Fee EStimate Block ----- */}
        <Grid container direction="column">
          <Grid item align="center" style={{ marginTop: "0.5em" }}>
            <Typography
              variant="h4"
              style={{ color: theme.palette.common.blue }}
            >
              Estimate: <span style={{ fontSize: "2rem" }}> £{estimate()}</span>{" "}
              per week
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item align="center">
        <Button
          className={classes.cancelButton}
          onClick={() => {
            setDialogOpen(false);
            setCheckedDays("");
            setCheckedHours("");
          }}
        >
          Cancel
        </Button>
      </Grid>
    </DialogContent>
  );
}
