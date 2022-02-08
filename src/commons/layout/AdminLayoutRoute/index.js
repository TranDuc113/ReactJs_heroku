import React, { Component } from "react";
import style from "./style.js";
import { withStyles } from "@mui/styles";
import { Route } from "react-router-dom";
import DashBoard from "./../../../components/Dashboard/index";

class AdminLayoutRoute extends Component {
  render() {
    const { component: YourComponent, name, ...remainProps } = this.props;
    return (
      <Route
        {...remainProps}
        render={(routeProps) => {
          return (
            <DashBoard name={name}>
              <YourComponent {...routeProps} />
            </DashBoard>
          );
        }}
      />
    );
  }
}

export default withStyles(style)(AdminLayoutRoute);
