import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  change = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  componentWillMount() {
    if (localStorage.getItem("logindata")) {
      this.props.history.push("/Dashboard");
    }
  }
  logincheck = e => {
    e.preventDefault();
    var obj = JSON.parse(localStorage.getItem("data"));
    if (obj === null) {
      alert("signup first");

      this.props.history.push("/Signup");
    } else {
      let found = obj.find(data => {
        return (
          data.email === this.state.email &&
          data.password === this.state.password
        );
      });

      if (found) {
        localStorage.setItem("logindata", JSON.stringify(found));

        this.props.history.push("/Dashboard");
        this.setState({
          [this.state.email]: "",
          [this.state.password]: ""
        });
      } else {
        alert("not match");
      }
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.logincheck}>
          <div className="wrapper">
            <div className="container">
              <Link to="/Signup">
                <button color="inherit" className="signup">
                  <h3> Sign Up</h3>
                </button>
              </Link>

              <Link to="Login">
                <button color="inherit" className="login">
                  <h3>log In</h3>
                </button>
              </Link>

              <div className="login-form">
                <input
                  type="text"
                  placeholder="Email "
                  name="email"
                  onChange={this.change}
                  className="input"
                  required
                />
                <br />
                <input
                  type="password"
                  placeholder="Password"
                  className="input"
                  name="password"
                  onChange={this.change}
                  required
                />
                <br />

                <button type="submit" className="btn">
                  log in
                </button>

                <span>
                  <Link to="Forgot">I forgot my username or password.</Link>
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
