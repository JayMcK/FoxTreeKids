import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./ui/Theme";
import Header from "./ui/Header";
import Footer from "./ui/Footer";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        <Switch>
          <Route
            path="/home"
            component={() => (
              <div style={{ height: "2000px" }}>
                <h1>Home</h1>
              </div>
            )}
          />
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
        <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
