import React, { Component } from "react";
import { Link } from "react-router-dom";
import { resignup } from "../Action/Action.js";
import { willmount } from "../Action/Action.js";

class Signup extends Component {
  state = {
    name: "",
    email: "",
    username: "",
    password: "",
    confirmpass: ""
  };

  change = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  componentWillMount() {
    if (localStorage.getItem("logindata")) {
      this.props.history.push("/Dashboard");
    }
    var obj = JSON.parse(localStorage.getItem("data"));
    willmount(obj);
  }

  Signup = e => {
    e.preventDefault();
    var obj = JSON.parse(localStorage.getItem("data"));
    if (obj === null) {
      if (this.state.password === this.state.confirmpass) {
        resignup(this.state);
      } else {
        alert("password not match");
      }
      this.props.history.push("/Login");
    } else {
      let found = obj.find(data => {
        return data.email === this.state.email;
      });

      if (this.state.password === this.state.confirmpass) {
        if (found) {
          return alert("email alredy exist");
        } else {
          resignup(this.state);
          this.props.history.push("/Login");
        }
      } else {
        alert("password not match");
      }
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.Signup}>
          <div className="wrapper">
            <div className="container">
              <Link to="/Signup">
                <button color="inherit" className="signup">
                  <h3> Sign Up</h3>
                </button>
              </Link>

              <Link to="Login">
                <button color="inherit" className="login">
                  <h3> log In</h3>
                </button>
              </Link>
              <div className="signup-form">
                <input
                  type="text"
                  placeholder="Name"
                  value={this.state.name}
                  name="name"
                  onChange={this.change}
                  className="input"
                  required
                />
                <input
                  type="text"
                  placeholder="Your Email Address"
                  name="email"
                  value={this.state.email}
                  pattern="(.+)@(.+){1,}\.(.+){2,}"
                  onChange={this.change}
                  className="input"
                  required
                />
                <br />
                <input
                  type="text"
                  placeholder="Choose a Username"
                  name="username"
                  value={this.state.username}
                  onChange={this.change}
                  className="input"
                  required
                />
                <br />
                <input
                  type="password"
                  placeholder="Choose a Password"
                  className="input"
                  minLength="10"
                  name="password"
                  value={this.state.password}
                  onChange={this.change}
                  required
                />
                <br />
                <input
                  type="password"
                  placeholder="Confirm password "
                  className="input"
                  onChange={this.change}
                  value={this.state.confirmpass}
                  name="confirmpass"
                  required
                />
                <br />

                <button type="Submit" className="btn">
                  Create account
                </button>
              </div>
            </div>
          </div>
        </form>
        {this.state.allval}
      </div>
    );
  }
}

export default Signup;
