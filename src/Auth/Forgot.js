import React, { Component } from "react";
import { Link } from "react-router-dom";

class Forgot extends Component {
  state = {};
  render() {
    return (
      <div>
        <form>
          <div className="wrapper">
            <div className="container">
              <div className="login-form">
                <h2 className="forgot">Forgot password</h2>
                <p className="forgot">
                  We just need your Email to reset your password
                </p>
                <input
                  type="text"
                  placeholder=" Enter your Email "
                  className="input"
                  required
                />

                <br />
                <button className="btn">Reset password</button>
                <span>
                  <Link to="Forgot">.</Link>
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Forgot;
