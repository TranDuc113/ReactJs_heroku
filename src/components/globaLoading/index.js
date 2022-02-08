import React, { Component } from "react";
import { withStyles } from "@mui/styles";
import style from "./style.js";
import LoadingIcon from "./../../commons/Theme/Image/loading_1.gif";
import { connect } from "react-redux";

class GloabalLoading extends Component {
  render() {
    var { classes, showLoading } = this.props;
    let xhtml = null;
    if (showLoading) {
      xhtml = (
        <div className={classes.globalloading}>
          <img src={LoadingIcon} alt="Loading" className={classes.Icon} />
        </div>
      );
    }
    return xhtml;
  }
}

const mapStateToProps = (state) => {
  return {
    showLoading: state.ui.showLoading,
  };
};

export default withStyles(style)(
  connect(mapStateToProps, null)(GloabalLoading)
);
