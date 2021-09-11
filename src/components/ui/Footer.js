import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.orange,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  link: {
    ...theme.typography.tab,
    color: theme.palette.common.cream,
    opacity: 1,
    fontSize: "0.8rem",
    textDecoration: "none",
  },
  gridItem: {
    marginRight: "3em",
    marginLeft: "3em",
    marginTop: "1em",
    marginBottom: 0,
  },
  icon: {
    height: "3em",
    width: "3em",
    [theme.breakpoints.down("md")]: {
      height: "2.5em",
      width: "2.5em",
    },
  },
  socialContainer: {
    paddingTop: "1em",
    paddingBottom: "0.5em",
    width: "100%",
  },
}));

export default function Footer({
  value,
  setValue,
  selectedIndex,
  setSelectedIndex,
}) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid
          container
          direction="row"
          justifyContent="center"
          style={{ margin: 0 }}
        >
          <Grid item className={classes.gridItem}>
            <Grid item container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/home"
                onClick={() => setValue(0)}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid item container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/school"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(0);
                }}
              >
                Our School
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/visit"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(1);
                }}
              >
                Visit Us
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/curriculum"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(2);
                }}
              >
                Curriculum
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/gallery"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(3);
                }}
              >
                Gallery
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid item container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/admissions"
                onClick={() => setValue(2)}
              >
                Admissions
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/join"
                onClick={() => setValue(false)}
              >
                Join Waiting List
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/admissions"
                onClick={() => setValue(2)}
              >
                School Fees
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/admissions"
                onClick={() => setValue(2)}
              >
                Term Dates
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid item container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/about"
                onClick={() => setValue(3)}
              >
                About Us
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/about"
                onClick={() => setValue(3)}
              >
                History
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/about"
                onClick={() => setValue(3)}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid item container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/contact"
                onClick={() => setValue(4)}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <Grid
        container
        alignItems="center"
        justifyContent={matchesMD ? "center" : "flex-end"}
        spacing={matchesMD ? 1 : 2}
        className={classes.socialContainer}
      >
        <Grid
          item
          component={"a"}
          href="https://www.linkedin.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={linkedin} alt="linkedin logo" className={classes.icon} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.twitter.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={twitter} alt="twitter logo" className={classes.icon} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.facebook.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={facebook} alt="facebook logo" className={classes.icon} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.instagram.com/"
          rel="noopener noreferrer"
          target="_blank"
          style={{ marginRight: matchesMD ? undefined : "1.2em" }}
        >
          <img src={instagram} alt="instagram logo" className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  );
}
