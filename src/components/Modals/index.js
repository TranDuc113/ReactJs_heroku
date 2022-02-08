import React, { Component } from "react";
import Modal from "@mui/material/Modal";
import { withStyles } from "@mui/styles";
import style from "./style.js";
import Box from "@mui/material/Box";
import { connect } from "react-redux";
import * as modalaction from "./../../actions/modal";
import { bindActionCreators } from "redux";

class Modals extends Component {
  render() {
    var { open } = this.props;
    var { classes, modalactionCreator, component, title } = this.props;
    const { hidemodal } = modalactionCreator;
    return (
      <Modal
        open={open}
        onClose={hidemodal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.styBox}>
          <div className={classes.header}>
            <span className={classes.title}>{title}</span>
          </div>
          <div className={classes.content}>{component}</div>
        </Box>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    open: state.modal.showmodal,
    component: state.modal.component,
    title: state.modal.title,
  };
};
const mapDispatchToProps = (dispatch) => ({
  modalactionCreator: bindActionCreators(modalaction, dispatch),
});

export default withStyles(style)(
  connect(mapStateToProps, mapDispatchToProps)(Modals)
);
