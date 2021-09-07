import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Hidden from "@material-ui/core/Hidden";
import TextField from "@material-ui/core/TextField";

import heroBackground from "../assets/heroBackground.jpg";
import call from "../assets/call.svg";
import email from "../assets/email.svg";

const useStyles = makeStyles((theme) => ({
  image: {
    width: "100%",
  },
  infoText: {
    color: theme.palette.common.blue,
  },
  infoIcon: {
    marginRight: "0.5em",
    width: "50%",
  },
  root: {
    "& > *": {
      width: "35ch",
    },
  },
}));

export default function Visit({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container direction="row" style={{ marginTop: "2em" }}>
      <Grid item container direction="column" lg={4}>
        <Grid
          item
          align={matchesMD ? "center" : undefined}
          style={{ marginLeft: matchesMD ? 0 : "2em", marginTop: "3em" }}
        >
          <Typography variant="h3">Visit Us</Typography>
          <Typography
            variant="subtitle1"
            paragraph
            style={{ color: theme.palette.common.blue }}
          >
            We can't wait to meet you!
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justifyContent={matchesMD ? "center" : undefined}
          alignItems="flex-end"
          style={{ marginLeft: matchesMD ? 0 : "2em" }}
        >
          <Grid item>
            <img src={call} alt="telephone" className={classes.infoIcon} />
          </Grid>
          <Grid item>
            <Typography
              paragraph
              variant="body1"
              className={classes.infoText}
              style={{ marginBottom: 0 }}
            >
              +44 (0) 207 827 2936
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justifyContent={matchesMD ? "center" : undefined}
          alignItems="flex-end"
          style={{ marginLeft: matchesMD ? 0 : "2em" }}
        >
          <Grid item>
            <img src={email} alt="envelope" className={classes.infoIcon} />
          </Grid>
          <Grid item>
            <Typography
              paragraph
              variant="body1"
              className={classes.infoText}
              style={{ marginBottom: 0 }}
            >
              visitus@foxtreekids.com
            </Typography>
          </Grid>
          <Grid item>
            {/*----- Form Block ----- */}
            <Grid container direction="column">
              <form className={classes.root}>
                <TextField required id="standard-basic" label="Name" />
                <TextField required id="standard-basic" label="Email" />
                <TextField required id="standard-basic" label="Phone" />
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Hidden mdDown>
        <Grid item container lg={8}>
          <img
            src={heroBackground}
            alt="some of the class"
            className={classes.image}
          />
        </Grid>
      </Hidden>
    </Grid>
  );
}
