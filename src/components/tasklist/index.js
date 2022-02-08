import React, { Component } from "react";
import { withStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import style from "./style";
import Grid from "@mui/material/Grid";
import Taskitem from "../taskitem";

class tasklist extends Component {
  render() {
    var { classes, taskFilter, sta, onClickEdit, onClickDelete } = this.props;
    return (
      <Grid item md={4} key={sta.value}>
        <Box mt={1} mb={1}>
          <div className={classes.status}>{sta.label}</div>
        </Box>
        <div className={classes.wrapperListtask}>
          {taskFilter.map((task, index) => {
            return (
              <Taskitem
                index={index}
                task={task}
                key={index}
                onClickEdit={onClickEdit}
                onClickDelete={onClickDelete}
              ></Taskitem>
            );
          })}
        </div>
      </Grid>
    );
  }
}

export default withStyles(style)(tasklist);
