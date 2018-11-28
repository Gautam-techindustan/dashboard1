import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Showdetails from "./showdetails.js";
import Modal from "react-modal";
import a from "../../images/a.jpeg";
import { Adddetails, Deletedetails } from "../../Action/Action.js";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "transparent"
  },
  avtar: {
    margin: "0 10 0 0"
  }
};

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

class Details extends Component {
  state = {
    name: "",
    age: "",
    phoneno: "",
    details: "",
    image: "",
    toggle: false
  };

  change = e => {
    e.preventDefault();
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleClose = e => {
    e.preventDefault();
    this.setState({
      toggle: false,
      name: "",
      age: "",
      phoneno: "",
      details: "",
      image: ""
    });
  };

  toggle = e => {
    e.preventDefault();
    this.setState({ toggle: true });
  };

  adddetail = e => {
    e.preventDefault();
    if (this.state.name.trim() && this.state.details.trim()) {
      Adddetails(this.state, this.props.classindex, this.props.nameindex);
      this.setState({
        name: "",
        age: "",
        phoneno: "",
        details: "",
        toggle: false
      });
    }
  };

  delete = e => {
    e.preventDefault();
    let details = [];

    let { value, classindex, nameindex } = this.props;
    let detail = value[classindex].data[nameindex][0].details;

    if (detail.length === undefined) {
      Deletedetails(details, this.props.classindex, this.props.nameindex);
      this.props.deleteinfo();
    }
  };

  edit = e => {
    e.preventDefault();
    let { value, classindex, nameindex } = this.props;
    let edit = value[classindex].data[nameindex][0].details;
    this.setState({
      name: edit.name,
      age: edit.age,
      phoneno: edit.phoneno,
      details: edit.details,
      toggle: true
    });
    this.form();
  };

  form = () => {
    const { classes } = this.props;
    return (
      <Modal isOpen={this.state.toggle} style={customStyles}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <input
                className="input-info  "
                type="text"
                name="name"
                placeholder="Name"
                autoComplete="off"
                value={this.state.name}
                onChange={this.change}
              />
            </Paper>
          </Grid>

          <br />

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <input
                className="input-info  "
                type="number"
                name="age"
                placeholder="Age"
                autoComplete="off"
                value={this.state.age}
                onChange={this.change}
              />
            </Paper>
          </Grid>

          <br />

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <input
                className="input-info "
                type="number"
                name="phoneno"
                placeholder="Phone No"
                autoComplete="off"
                value={this.state.phoneno}
                onChange={this.change}
              />
            </Paper>
          </Grid>

          <br />

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <textarea
                className="input-info1 "
                type="text"
                name="details"
                placeholder="Details"
                autoComplete="off"
                value={this.state.details}
                onChange={this.change}
              />
            </Paper>
          </Grid>
        </Grid>

        <button className="modal-button" onClick={this.adddetail}>
          save
        </button>
        <button className="modal-button" onClick={this.handleClose}>
          close
        </button>
      </Modal>
    );
  };

  render() {
    let { value, classindex, nameindex, classes } = this.props;
    let check =
      value &&
      value[classindex] &&
      value[classindex].data &&
      value[classindex].data[nameindex];
    var disabled = false;
    if (
      check &&
      value[classindex].data[nameindex][0].details.length === undefined
    ) {
      disabled = true;
    }

    return (
      <div className="w3-detailbar">
        <div>
          {check ? (
            <div>
              {value[classindex].data[nameindex][0].details ? (
                <form>
                  {this.state.toggle ? this.form() : null}
                  <div>
                    <span style={{ float: "left", padding: 10 }}>
                      <Avatar
                        alt="Remy Sharp"
                        src={a}
                        className={classes.avatar}
                      />
                    </span>
                    <span style={{ float: "left", paddingTop: 15 }}>
                      <h4>{this.props.logindata.username}</h4>
                    </span>
                    <span style={{ float: "right" }}>
                      <button
                        className="information-button"
                        onClick={this.toggle}
                        disabled={disabled}
                      >
                        <i className="material-icons">add_circle</i>
                      </button>

                      <button
                        className="delete-information"
                        onClick={this.delete}
                      >
                        <i className="material-icons">delete</i>
                      </button>

                      {value[classindex].data[nameindex][0].details.length ===
                      undefined ? (
                        <button
                          className="delete-information"
                          onClick={this.edit}
                        >
                          <i className="material-icons">edit</i>
                        </button>
                      ) : null}
                    </span>
                  </div>
                </form>
              ) : null}
            </div>
          ) : null}
        </div>
        <div>
          {check &&
          value[classindex].data[nameindex][0] &&
          value[classindex].data[nameindex][0].details ? (
            <div>
              {value[classindex].data[nameindex][0].details.length ===
              undefined ? (
                <Showdetails
                  details={value[classindex].data[nameindex][0].details}
                />
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  if (state === undefined) {
    return {
      value: null
    };
  } else {
    return {
      value: state.collections
    };
  }
};

Details.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(withStyles(styles)(Details));
