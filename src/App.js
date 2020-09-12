import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Work from "./pages/Work";
import ExpectIn from "./pages/ExpectIn";
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
          </Switch>
        </Router>
        <Layout />
      </Layout>
    </React.Fragment>
  );
}

export default App;
