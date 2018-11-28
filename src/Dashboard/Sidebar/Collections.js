import React, { Component } from "react";

import List from "@material-ui/core/List";
import PropTypes from "prop-types";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: "200px",
    maxWidth: "200px",
    backgroundColor: theme.palette.background.paper
  }
});

//
class Collections extends Component {
  state = {};
  collectiondata = e => {
    console.log(e, "collection index=======", this.props.data);
    this.props.collectiondataindex(this.props.data, e);
  };

  render() {
    return (
      <React.Fragment>
        <List component="nav">
          <ul
            style={{ backgroundColor: "white" }}
            onClick={() => {
              this.collectiondata(this.props.index);
            }}
          >
            <ListItem button>
              <ListItemText>
                <i
                  className="material-icons"
                  style={{ fontSize: 15, float: "left", paddingTop: 4 }}
                  align="left"
                >
                  donut_large
                </i>
                &nbsp;&nbsp;&nbsp;
                {this.props.data.title}
              </ListItemText>
            </ListItem>
          </ul>

          <Divider />
        </List>
      </React.Fragment>
    );
  }
}

Collections.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Collections);
