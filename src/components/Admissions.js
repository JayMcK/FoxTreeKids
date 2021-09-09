import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Dialog from "@material-ui/core/Dialog";

import CallToAction from "./ui/CallToAction";
import Fees from "./Fees";

import buttonArrow from "../assets/buttonArrow.svg";
import checklist from "../assets/checklist.svg";

const useStyles = makeStyles((theme) => ({
  specialText: {
    fontFamily: "caveat brush",
    color: theme.palette.common.blue,
    fontSize: "1.5rem",
  },
  learnButton: {
    ...theme.typography.learnButton,
    height: 35,
    padding: 7,
    fontSize: "0.9rem",
  },
  checklistIcon: {
    [theme.breakpoints.down("sm")]: {
      height: "15em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "10em",
    },
  },
}));

export default function Admissions({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <Grid container direction="column">
      <Grid item>
        {/*----- Join Block -----*/}
        <Grid
          item
          align={matchesSM ? "center" : undefined}
          style={{
            marginTop: "3.5em",
            marginBottom: "2em",
            marginLeft: matchesSM ? 0 : "5em",
          }}
        >
          <Typography
            variant="h1"
            style={{ color: theme.palette.common.blue, marginTop: "1em" }}
          >
            Admissions
          </Typography>
        </Grid>
        <Grid
          container
          direction="column"
          alignItems="center"
          style={{
            paddingBottom: "5em",
            paddingTop: "5em",
            backgroundColor: theme.palette.grey[200],
          }}
        >
          <Grid item>
            <img
              src={checklist}
              alt="house icon"
              className={classes.checklistIcon}
            />
          </Grid>
          <Grid item container direction="column" alignItems="center">
            <Typography
              variant="h2"
              style={{ color: theme.palette.common.orange }}
            >
              Join waiting list
            </Typography>
            <Typography
              variant="subtitle1"
              paragraph
              className={classes.paragraphText}
              align="center"
              style={{
                marginLeft: matchesSM ? "1em" : 0,
                marginRight: matchesSM ? "1em" : 0,
              }}
            >
              We are now accepting applications for 2022/23. Join the{" "}
              <span className={classes.specialText}>waiting list.</span>
            </Typography>
            <Grid item>
              <Button
                variant="outlined"
                className={classes.learnButton}
                onClick={() => {
                  setValue(false);
                }}
                component={Link}
                to="/join"
                style={{
                  color: theme.palette.common.orange,
                  borderColor: theme.palette.common.orange,
                }}
              >
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
      </Grid>
      <Grid item>
        {/*-----School Fees/Term Dates -----*/}
        <Grid
          container
          direction="row"
          style={{
            marginTop: "5em",
            marginBottom: "5em",
          }}
          alignItems="center"
          className={classes.ourSchoolBackground}
        >
          <Grid
            item
            container
            justifyContent={matchesSM ? undefined : "space-between"}
            style={{
              textAlign: matchesXS ? "center" : "inherit",
            }}
            direction={matchesSM ? "column" : "row"}
          >
            <Grid
              item
              sm
              style={{
                marginRight: matchesXS ? "1em" : "2em",
                marginBottom: matchesXS ? "6em" : matchesSM ? "3em" : 0,
                marginLeft: matchesXS ? "1em" : matchesSM ? "2em" : "5em",
              }}
            >
              <Grid item>
                <Typography variant="h3">School Fees</Typography>
                <Typography
                  variant="subtitle1"
                  paragraph
                  className={classes.paragraphText}
                >
                  Priced monthly and with the flexibility to include or exclude
                  school meals and extended hours, we have different packages
                  <span className={classes.specialText}>
                    {" "}
                    to suit your schedule.
                  </span>
                </Typography>
                <Grid item>
                  <Button
                    variant="outlined"
                    className={classes.learnButton}
                    onClick={() => {
                      setValue(false);
                      setDialogOpen(true);
                    }}
                    style={{
                      color: theme.palette.common.orange,
                      borderColor: theme.palette.common.orange,
                    }}
                  >
                    Learn More
                    <span style={{ marginRight: 10 }}></span>
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
            <Grid
              item
              sm
              style={{
                marginRight: matchesXS ? "1em" : matchesSM ? "2em" : "5em",
                marginLeft: matchesXS ? "1em" : "2em",
                textAlign: matchesXS ? "center" : "right",
              }}
            >
              <Grid container direction="column">
                <Typography variant="h3">Term Dates</Typography>
                <Typography
                  variant="subtitle1"
                  paragraph
                  className={classes.paragraphText}
                >
                  Open all year round, from 8am - 6:30pm.
                </Typography>
                <Typography
                  variant="subtitle1"
                  paragraph
                  className={classes.paragraphText}
                >
                  We offer the flexibility of full time or tailored part-time
                  places
                  <span className={classes.specialText}>
                    {" "}
                    to suit your needs.
                  </span>
                </Typography>
                <Grid item>
                  <Button
                    variant="outlined"
                    className={classes.learnButton}
                    onClick={() => {
                      setValue(false);
                    }}
                    component={Link}
                    to="/term-dates"
                    style={{
                      color: theme.palette.common.orange,
                      borderColor: theme.palette.common.orange,
                    }}
                  >
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
          </Grid>
        </Grid>
      </Grid>
      <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />
      <Dialog
        fullWidth
        fullScreen={matchesXS}
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        style={{ zIndex: 1302 }}
      >
        <Fees setDialogOpen={setDialogOpen} />
      </Dialog>
    </Grid>
  );
}
