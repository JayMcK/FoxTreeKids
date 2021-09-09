import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "@material-ui/core/Button";

import fox from "../assets/fox.svg";

const useStyles = makeStyles((theme) => ({
  foxImage: {
    height: "15em",
  },
}));

export default function NotFound() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid item style={{ minHeight: "80em" }}>
      <Grid container direction="column">
        <Grid item style={{ marginTop: "5em" }} align="center">
          {/* ----- Title Block ----- */}
          <Typography variant="h2" style={{ fontSize: "5rem" }}>
            404
          </Typography>
          <Typography variant="h3">
            Sorry, we couldn't find that page...
          </Typography>
        </Grid>
        <Grid item align="center">
          <img src={fox} alt="fox" className={classes.foxImage} />
        </Grid>
        <Grid item align="center">
          <Typography variant="subtitle1">
            But we're here to help! Maybe one of these will point you in the
            right direction...
          </Typography>
        </Grid>
      </Grid>
      <Grid container direction="column">
      
      </Grid>
    </Grid>
  );
}
