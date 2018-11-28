import React, { Component } from "react";
import Header from "./Header/Header.js";
import Sidebar from "./Sidebar/Sidebar.js";
import Collectiondata from "./Main/CollectionsData.js";
import Details from "./Main/Details.js";

class Dash extends Component {
  state = {
    data: "",
    index: "",
    nameindex: ""
  };

  collectiondatadetailsindex = ind => {
    this.setState({ nameindex: ind });
  };

  collectiondataindex = (data, index) => {
    this.setState({
      index: index,
      data: data
    });
  };

  deleteinfo = () => {
    this.setState({
      nameindex: ""
    });
  };

  render() {
    console.log(this.state.index, "inddexxxxxxxxxx", this.state.nameindex);

    return (
      <div className="grid-container">
        <div className="item1">
          <Header className="" logout={this.props.logout} />
        </div>
        <div className="item2">
          <Sidebar
            collectiondataindex={this.collectiondataindex}
            datacoming={this.state.datacoming}
            logindata={this.props.logindata}
          />
        </div>
        <div className="item3">
          <Collectiondata
            index={this.state.index}
            data={this.state.data}
            collectiondatadetailsindex={this.collectiondatadetailsindex}
          />
        </div>
        <div className="item4">
          <Details
            classindex={this.state.index}
            nameindex={this.state.nameindex}
            deleteinfo={this.deleteinfo}
            logindata={this.props.logindata}
          />
        </div>
      </div>
    );
  }
}

export default Dash;
