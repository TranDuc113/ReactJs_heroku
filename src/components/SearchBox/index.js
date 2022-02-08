import React, { Component } from "react";
import { withStyles } from "@mui/styles";
import style from "./style.js";
import TextField from "@mui/material/TextField";

class SearchBox extends Component {
  handleChange = (ev) => {
    this.props.handleChange(ev);
  };
  render() {
    var { classes } = this.props;
    return (
      <div className={classes.Search}>
        <TextField
          className={classes.TextField}
          id="standard-search"
          label="Nhập từ khóa"
          type="search"
          variant="standard"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default withStyles(style)(SearchBox);
