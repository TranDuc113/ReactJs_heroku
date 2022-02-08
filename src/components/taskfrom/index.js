import React, { Component } from "react";
import Button from "@mui/material/Button";
import { withStyles } from "@mui/styles";
import style from "./style.js";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import * as modalaction from "./../../actions/modal";
import { Field, reduxForm } from "redux-form";
import {
  renderTextField,
  renderSelectField,
} from "./../../components/FormHelper/index";
import { validate } from "./validate";
import * as TaskAction from "./../../actions/task";
import MenuItem from "@mui/material/MenuItem";

class taskfrom extends Component {
  handleSubmitForm = (data) => {
    const { TaskActionCreators, taskEditting } = this.props;
    const { addTask, updateTask } = TaskActionCreators;
    const { Title, MoTa, status } = data;
    if (taskEditting) {
      updateTask(Title, MoTa, status, taskEditting.id);
    } else {
      addTask(Title, MoTa);
    }
  };

  required = (data) => {
    let err = "Vui lòng nhập tiêu đề";
    if (data != null && typeof data != "undefined" && data.trim() !== "") {
      err = null;
    }
    return err;
  };

  minlength = (data) => {
    let err = "Tiêu đề phải lớn hơn 5 ký tự";
    if (typeof data != "undefined" && data.length > 5) {
      err = null;
    }
    return err;
  };

  renderStatusSelection = () => {
    let xhtml = null;
    var { taskEditting, classes } = this.props;
    if (taskEditting) {
      xhtml = (
        <Field
          className={classes.selectField}
          name="status"
          component={renderSelectField}
          label="Standard"
          variant="standard"
        >
          <MenuItem value={0}>READY</MenuItem>
          <MenuItem value={1}>IN PROGRESS</MenuItem>
          <MenuItem value={2}>COMPLETE</MenuItem>
        </Field>
      );
    }

    return xhtml;
  };

  render() {
    var { classes, handleSubmit, invalid, submitting, modalactionCreator } =
      this.props;
    const { hidemodal } = modalactionCreator;
    return (
      <form onSubmit={handleSubmit(this.handleSubmitForm)}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <Field
              name="Title"
              className={classes.textfield}
              id="Title"
              label="Tiêu đề"
              component={renderTextField}
              //   validate={(this.required, this.minlength)}
            ></Field>
          </Grid>
          <Grid item md={6}>
            <Field
              name="MoTa"
              className={classes.textfield}
              id="MoTa"
              label="Mô tả"
              component={renderTextField}
            ></Field>
          </Grid>{" "}
          <Grid item md={6}>
            {this.renderStatusSelection()}
          </Grid>
          <Grid item md={12}>
            <Box display="flex" flexDirection="row-reverse" mt={2}>
              <Box ml={1}>
                <Button onClick={hidemodal}>Cancel</Button>
                <Button disabled={invalid || submitting} type="submit">
                  Lưu lại
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </form>
    );
  }
}

const FORM_NAME = "TASK_MANAGEMENT";

const mapStateToProps = (state) => {
  return {
    taskEditting: state.task.taskEditting,
    initialValues: state.task.taskEditting,
  };
};

const mapDispatchToProps = (dispatch) => ({
  modalactionCreator: bindActionCreators(modalaction, dispatch),
  TaskActionCreators: bindActionCreators(TaskAction, dispatch),
});

const withReduxfrom = reduxForm({
  form: FORM_NAME,
  validate: validate,
});

export default compose(
  withStyles(style),
  connect(mapStateToProps, mapDispatchToProps),
  withReduxfrom
)(taskfrom);
