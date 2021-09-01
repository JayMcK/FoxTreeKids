import React, { useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import students from "../assets/students.svg";
import buttonArrow from "../assets/buttonArrow.svg";
import leftQuotes from "../assets/leftQuotes.svg";
import rightQuotes from "../assets/rightQuotes.svg";

const useStyles = makeStyles((theme) => ({
  heroImage: {
    maxHeight: "30em",
    maxwidth: "30em",
    marginLeft: "2em",
    marginRight: "2em",
    [theme.breakpoints.down("md")]: {
      maxHeight: "25em",
      maxWidth: "25em",
    },
    [theme.breakpoints.down("sm")]: {
      maxHeight: "20em",
      maxWidth: "20em",
    },
    [theme.breakpoints.down("xs")]: {
      maxHeight: "15em",
      maxWidth: "15em",
    },
  },
  joinButton: {
    ...theme.typography.join,
    borderRadius: 50,
    backgroundColor: theme.palette.common.blue,
    color: theme.palette.common.cream,
    height: 45,
    width: 175,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    borderRadius: 50,
    height: 45,
    width: 175,
    fontSize: "0.9rem",
  },
  buttonContainer: {
    marginTop: "1em",
  },
  mainContainer: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  quoteContainer: {
    minHeight: "20rem",
    backgroundColor: theme.palette.grey[200],
  },
  quote: {
    ...theme.typography.join,
    color: theme.palette.grey[700],
    fontSize: "1.5em",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "1em",
      paddingRight: "1em",
    },
  },
}));

export default function LandingPage() {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item>
        {/*-----Hero Block -----*/}
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid item md>
            <Typography variant="h2" align="center">
              Fox Tree Kids <br /> Montessori School <br /> 2.5 - 6 years
            </Typography>
            <Grid
              container
              direction={matchesXS ? "column" : "row"}
              alignItems={matchesXS ? "center" : undefined}
              justifyContent="center"
              spacing={2}
              className={classes.buttonContainer}
              style={{ marginBottom: matchesXS ? "1em" : 0 }}
            >
              <Grid item>
                <Button variant="contained" className={classes.joinButton}>
                  Join Waiting List
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" className={classes.learnButton}>
                  Learn More <span style={{ marginRight: 10 }}></span>
                  <img
                    src={buttonArrow}
                    alt="right arrow"
                    width={15}
                    height={15}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md align="center">
            <img
              src={students}
              alt="two students working at the table"
              className={classes.heroImage}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*-----Quote Block -----*/}
        <Grid
          container
          direction="column"
          className={classes.quoteContainer}
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid
            item
            container
            direction="row"
            justifyContent="flex-start"
            className={classes.quoteMark}
          >
            <Grid item style={{ marginLeft: "2em" }}>
              <img
                src={leftQuotes}
                alt="left quotatio mark"
                style={{ height: 30, width: 30 }}
              />
            </Grid>
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle1"
              className={classes.quote}
              align="center"
            >
              The greatest sign of success for a teacher... is to be able to
              say, "The children are now working as if I did not exist".
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction="row"
            justifyContent="flex-end"
            className={classes.quoteMark}
          >
            <Grid item style={{ marginRight: "2em" }}>
              <img
                src={rightQuotes}
                alt="right quotation mark"
                style={{ height: 30, width: 30 }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
