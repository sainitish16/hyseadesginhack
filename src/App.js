import React from "react";
import "./App.css";
import HomeBody from "./Components/HomeBody";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import JobsList from './Components/JobsList';
import JobDesc from './Components/JobDesc';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Nav />
        <Switch>
          <Route path="/" exact component={HomeBody} />
          <Route path="/jobs-list" exact component={JobsList} />
          <Route path="/job-desc" exact component={JobDesc} />
        </Switch>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
