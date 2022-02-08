import React, { Component } from "react";
import style from "./style.js";
import { withStyles } from "@mui/styles";
import Drawer from "@mui/material/Drawer";
import { ADMIN_ROUTES } from "./../../../contants/index";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { NavLink } from "react-router-dom";

class Slidebar extends Component {
  toggleDrawer = (value) => {
    const { onHandlerSlideBar } = this.props;
    if (onHandlerSlideBar) {
        onHandlerSlideBar(value);
    }
  };

  renderList = () => {
    var { classes } = this.props;
    let xhtml = null;
    xhtml = (
      <div className={classes.list}>
        <List component="div">
          {ADMIN_ROUTES.map((item, index) => {
            return (
              <NavLink
                to={item.path}
                exact={item.exact}
                className={classes.menuLink}
                activeClassName={classes.menuitemActive}
                key={index}
              >
                <ListItem className={classes.menuitem} button>
                  {item.name}
                </ListItem>
              </NavLink>
            );
          })}
        </List>
      </div>
    );
    return xhtml;
  };

  render() {
    const { classes, ShowSlidebar } = this.props;
    return (
      <Drawer
        anchor="left"
        open={ShowSlidebar}
        classes={{
          paper: classes.drawerPaper,
        }}
        variant="persistent"
        onClose={() => this.toggleDrawer(false)}
      >
        {this.renderList()}
      </Drawer>
    );
  }
}
export default withStyles(style)(Slidebar);
