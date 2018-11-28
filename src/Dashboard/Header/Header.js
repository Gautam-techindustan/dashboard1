import React, { Component } from "react";

class Header extends Component {
  state = {};

  render() {
    let { logout } = this.props;
    return (
      <div>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>News</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li style={{ float: "right" }}>
            <button onClick={logout} className="logout-button">
              <i className="material-icons" style={{ fontSize: 28 }}>
                power_settings_new
              </i>
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
