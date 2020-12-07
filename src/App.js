import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import WorkExperiance from "./pages/WorkExperiance";
import Contact from "./pages/Contact";
import Page404 from "./pages/Page404";
import NavigationBar from "./components/NavigationBar";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
function App() {
  return (
    <React.Fragment>
      <NavigationBar />
        <Router>
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/pages/WorkExperiance" component={WorkExperiance} />
            <Route path="/pages/Contact" component={Contact} />
            <Page404 component={Page404} />
          </Switch>
        </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
