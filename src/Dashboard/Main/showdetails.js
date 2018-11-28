import React, { Component } from "react";

class Showdetails extends Component {
  state = {
    details: []
  };

  render() {
    let { details } = this.props;

    return (
      <div>
        {details.length === undefined ? (
          <div
            style={{
              float: "left",
              clear: "both",
              width: "100%"
            }}
          >
            <p className="showData-P">Name ={details.name}</p>
            <p className="showData-P">Age ={details.age}</p>
            <p className="showData-P">phone No ={details.phoneno}</p>
            <p className="showData-P">Details ={details.details}</p>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Showdetails;
