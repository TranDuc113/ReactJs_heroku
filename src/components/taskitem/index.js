import React, { Component } from "react";
import style from "./style";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { withStyles } from "@mui/styles";
import { STATUS } from "./../../contants/index";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

class taskitem extends Component {
  render() {
    var { classes, index, task, onClickEdit, onClickDelete } = this.props;
    return (
      <Card key={index} className={classes.card}>
        <CardContent>
          <Grid container justifyContent="space-between">
            <Grid item md={8}>
              <Typography variant="h6">{task.title}</Typography>
            </Grid>
            <Grid item md={4}>
              {STATUS[task.status].label}
            </Grid>
          </Grid>
          <p>{task.description}</p>
        </CardContent>
        <CardActions className={classes.cardAction}>
          <Fab
            size="small"
            color="primary"
            aria-label="add"
            onClick={() => onClickEdit(task)}
          >
            <EditIcon fontSize="small" />
          </Fab>
          <Fab
            size="small"
            color="primary"
            aria-label="add"
            onClick={() => onClickDelete(task)}
          >
            <DeleteIcon fontSize="small" />
          </Fab>
        </CardActions>
      </Card>
    );
  }
}
export default withStyles(style)(taskitem);
