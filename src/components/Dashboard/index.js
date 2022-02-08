import React, { Component } from "react";
import style from "./style.js";
import { withStyles } from "@mui/styles";
import Header from "./Header/index";
import Sidebar from "./Sidebar/index";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import * as TaskAction from "./../../actions/task";
import cn from "classnames";

class Dashboad extends Component {
  onHandlerSlideBar = (value) => {
    const { TaskActionCreators } = this.props;
    const { ShowSlideBar, HideSlideBar } = TaskActionCreators;
    if (value === true) {
      ShowSlideBar();
    } else {
      HideSlideBar();
    }
  };

  render() {
    const AdminHomePage = this.props.children;
    const { name, classes, ShowSlidebar } = this.props;
    return (
      <div>
        <Header
          name={name}
          onHandlerSlideBar={this.onHandlerSlideBar}
          ShowSlidebar={ShowSlidebar}
        ></Header>
        <div className={classes.wrapper}>
          <Sidebar
            ShowSlidebar={ShowSlidebar}
            onHandlerSlideBar={this.onHandlerSlideBar}
          ></Sidebar>
          <div
            className={cn(classes.wrappercontent, {
              [classes.shiftleft]: ShowSlidebar === false,
            })}
          >
            {AdminHomePage}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ShowSlidebar: state.ui.showsildebar,
  };
};

const mapDispatchToProps = (dispatch) => ({
  TaskActionCreators: bindActionCreators(TaskAction, dispatch),
});

export default compose(
  withStyles(style),
  connect(mapStateToProps, mapDispatchToProps)
)(Dashboad);
