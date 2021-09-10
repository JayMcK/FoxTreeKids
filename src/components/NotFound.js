import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  linkText: {
    textDecoration: "none",
    color: theme.palette.common.blue,
    fontWeight: "bold",
  },
  homeButton: {
    ...theme.typography.join,
    backgroundColor: theme.palette.common.orange,
    borderRadius: "50px",
    height: 60,
    width: 150,
    fontSize: "1.5rem",
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
}));

export default function NotFound() {
  const classes = useStyles();
  const theme = useTheme();

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid item style={{ minHeight: "100vh" }}>
      <Grid container direction="column">
        <Grid
          item
          style={{
            marginTop: "5em",
            marginLeft: matchesMD ? "1em" : 0,
            marginRight: matchesMD ? "1em" : 0,
          }}
          align="center"
        >
          {/* ----- Info Block ----- */}
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
        <Grid
          item
          align="center"
          style={{
            marginLeft: matchesMD ? "1em" : 0,
            marginRight: matchesMD ? "1em" : 0,
          }}
        >
          <Typography variant="subtitle1">
            But we're here to help! Maybe one of these will point you in the
            right direction?
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        {/* ----- Links Block ----- */}
        <Grid
          container
          direction={matchesSM ? "column" : "row"}
          justifyContent="center"
          style={{ marginTop: "2em" }}
        >
          <Grid item sm align="center">
            <Typography
              className={classes.linkText}
              component={Link}
              to="/join"
              variant="subtitle1"
            >
              Join Waiting List
            </Typography>
          </Grid>
          <Grid item sm align="center">
            <Typography
              className={classes.linkText}
              component={Link}
              to="/visit"
              variant="subtitle1"
            >
              Visit Us
            </Typography>
          </Grid>
          <Grid item sm align="center">
            <Typography
              className={classes.linkText}
              component={Link}
              to="/contact"
              variant="subtitle1"
            >
              Contact Us
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          direction={matchesSM ? "column" : "row"}
          justifyContent="center"
          style={{ marginTop: matchesSM ? 0 : "2em" }}
        >
          <Grid item sm align="center">
            <Typography
              className={classes.linkText}
              component={Link}
              to="/admissions"
              variant="subtitle1"
            >
              Admissions
            </Typography>
          </Grid>
          <Grid item sm align="center">
            <Typography
              className={classes.linkText}
              component={Link}
              to="/school"
              variant="subtitle1"
            >
              Our School
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/* ----- Home Button Block ----- */}
        <Grid container justifyContent="center">
          <Grid item style={{ marginTop: "2em", marginBottom: "3em" }}>
            <Button
              component={Link}
              to="/home"
              className={classes.homeButton}
              variant="contained"
            >
              Go Home
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
