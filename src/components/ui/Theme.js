import { createTheme } from "@material-ui/core/styles";

const foxBlue = "#3DB2FF";
const foxCream = "#FFEDDA";
const foxOrange = "#EE9A38";

export default createTheme({
  palette: {
    common: {
      blue: foxBlue,
      cream: foxCream,
      orange: foxOrange,
    },
    primary: {
      main: foxOrange,
    },
    secondary: {
      main: foxBlue,
    },
  },
  typography: {
    h1: {
      fontFamily: "Palanquin",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: foxCream,
    },
    h2: {
      fontFamily: "Palanquin Dark",
      fontWeight: 500,
      fontSize: "2.5rem",
      color: foxBlue,
      lineHeight: 1.5,
    },
    tab: {
      fontFamily: "Palanquin",
      fontWeight: 700,
      textTransform: "none",
      fontSize: "1.1rem",
    },
    join: {
      fontFamily: "caveat brush",
      fontSize: "1.2em",
      textTransform: "none",
      color: foxCream,
      lineHeight: 1.5,
    },
    learnButton: {
      fontFamily: "Palanquin",
      borderColor: foxOrange,
      borderWidth: 2,
      color: foxOrange,
      textTransform: "none",
      fontWeight: "bold",
    },
  },
});
