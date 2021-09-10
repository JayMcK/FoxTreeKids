import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./ui/Theme";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import LandingPage from "./LandingPage";
import OurSchool from "./OurSchool";
import About from "./About";
import Admissions from "./Admissions";
import Curriculum from "./Curriculum";
import Gallery from "./Gallery";
import Visit from "./Visit";
import Contact from "./Contact";
import Join from "./Join";
import NotFound from "./NotFound";
import ScrollToTop from "./ui/ScrollToTop";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <ScrollToTop />
        <Switch>
          <Route
            path="/home"
            render={(props) => (
              <LandingPage
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            path="/school"
            render={(props) => (
              <OurSchool
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            path="/visit"
            render={(props) => (
              <Visit
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            path="/curriculum"
            render={(props) => (
              <Curriculum
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            path="/admissions"
            render={(props) => (
              <Admissions
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            path="/about"
            render={(props) => (
              <About
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            path="/gallery"
            render={(props) => (
              <Gallery
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            path="/contact"
            render={(props) => (
              <Contact
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            path="/join"
            render={(props) => (
              <Join
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            path="/not-found"
            render={(props) => (
              <NotFound
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" />
        </Switch>
        <Footer
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
