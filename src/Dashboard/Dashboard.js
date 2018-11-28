import React, { Component } from "react";
import Dash from "./Dash";

class Dashboard extends Component {
  state = {
    logindata: ""
  };

  componentWillMount() {
    if (localStorage.getItem("logindata")) {
      var obj = JSON.parse(localStorage.getItem("logindata"));
      this.setState({ logindata: obj });
    } else {
      this.props.history.push("/Login");
    }
  }

  logout = e => {
    e.preventDefault();
    localStorage.removeItem("logindata");
    this.props.history.push("/Login");
  };

  //
  //

  render() {
    return (
      <div>
        <Dash logout={this.logout} logindata={this.state.logindata} />
      </div>
    );
  }
}

export default Dashboard;
