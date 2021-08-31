import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./ui/Theme";
import Header from "./ui/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/home" component={() => <h1>Home</h1>} />
          <Route path="/school" component={() => <h1>school</h1>} />
          <Route path="/visit" component={() => <h1>visit</h1>} />
          <Route path="/curriculum" component={() => <h1>curriculum</h1>} />
          <Route
            path="/childrens-house"
            component={() => <h1>children's house</h1>}
          />
          <Route path="/admissions" component={() => <h1>admissions</h1>} />
          <Route path="/about" component={() => <h1>about</h1>} />
          <Route path="/contact" component={() => <h1>contact</h1>} />
          <Route path="/join" component={() => <h1>join</h1>} />
          <Route path="/not-found" component={() => <h1>not found page</h1>} />
          <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
