import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collectiondatadata from "./collectiondatadata";
import { Addcollection_data } from "../../Action/Action";

const styles = theme => ({
  root: {
    width: "100%",
    height: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

class Collectiondata extends Component {
  state = {
    title: "",
    details: [],
    toggle: false
  };

  change = e => {
    e.preventDefault();
    let { value } = e.target;
    this.setState({
      title: value
    });
  };

  toggle = () => {
    let { toggle } = this.state;
    this.setState({ toggle: !toggle });
  };

  addData1 = e => {
    e.preventDefault();
    this.toggle();
    let datacoming;
    datacoming = [...this.props.data, this.state];
    if (this.toggle && this.state.title.trim()) {
      Addcollection_data(datacoming, this.props.index);
      this.setState({
        title: ""
      });
    }
  };

  render() {
    const { classes, data } = this.props;
    console.log("data==", data);

    return (
      <div className="w3-collectionbar">
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
              {this.props.data.title && this.props.data.title.length ? (
                <h1 align="center">{this.props.data.title}</h1>
              ) : (
                <h1 align="center">Default</h1>
              )}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <div>
                {this.props.data ? (
                  <form onSubmit={this.addData1}>
                    {this.state.toggle ? (
                      <input
                        className="collection-input2"
                        type="text"
                        name="title"
                        autoComplete="off"
                        value={this.state.title}
                        onChange={this.change}
                      />
                    ) : (
                      <button type="submit" className="collection-button">
                        Add Members
                      </button>
                    )}
                  </form>
                ) : null}
              </div>
              <br />

              {data && data.data && data.data.length
                ? data.data.map((data, index) => {
                    return (
                      <div key={index} className="yoyo">
                        <Collectiondatadata
                          data={data}
                          index1={index}
                          collectiondatadetailsindex={
                            this.props.collectiondatadetailsindex
                          }
                        />
                      </div>
                    );
                  })
                : null}
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

Collectiondata.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Collectiondata);
