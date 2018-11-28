import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Forgot from "./Auth/Forgot";
import Dashboard from "./Dashboard/Dashboard.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch align="center" id="root">
          <Route exact path="/" component={Signup} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Forgot" component={Forgot} />
          <Route exact path="/Dashboard" component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

export default App;
