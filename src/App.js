import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Work from "./pages/Work";
import ExpectIn from "./pages/ExpectIn";
import Page404 from "./pages/Page404";
import NavigationBar from "./components/NavigationBar";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/pages/Work" component={Work} />
            <Route path="/pages/ExpectIn" component={ExpectIn} />
            <Route component={Page404} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;