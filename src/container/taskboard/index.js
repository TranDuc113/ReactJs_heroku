import React, { Component } from "react";
import style from "./style.js";
import { withStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Grid from "@mui/material/Grid";
import { STATUS } from "./../../contants/index";
import TaskList from "./../../components/tasklist/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as taskactions from "./../../actions/task";
import SearchBox from "./../../components/SearchBox/index";
import * as modalactions from "./../../actions/modal";
import Taskfrom from "./../../components/taskfrom/index";
import Swal from "sweetalert2";
// import Prototype from "prop-types";

class taskboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  componentDidMount() {
    const { taskactions } = this.props;
    const { fetchListTask } = taskactions;
    fetchListTask();
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  AddNewTask = () => {
    const { modalactionsCr, taskactions } = this.props;
    const { showmodal, changemodaltitle, changemodalcontent } = modalactionsCr;
    const { setTaskEditing } = taskactions;
    setTaskEditing(null);
    showmodal();
    changemodaltitle("Thêm mới công việc  ");
    changemodalcontent(<Taskfrom></Taskfrom>);
  };

  onClickEdit = (task) => {
    const { taskactions } = this.props;
    const { setTaskEditing } = taskactions;
    setTaskEditing(task);

    const { modalactionsCr } = this.props;
    const { showmodal, changemodaltitle, changemodalcontent } = modalactionsCr;
    showmodal();
    changemodaltitle("Cập nhật công việc  ");
    changemodalcontent(<Taskfrom></Taskfrom>);
  };

  onClickDelete = (task) => {
    Swal.fire({
      text: "Bạn chắc chắn muốn xóa ?",
      icon: "question",
      showCancelButton: false,
      showDenyButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Chấp nhận",
      denyButtonText: "Không chập nhận",
    }).then((result) => {
      if (result.isConfirmed) {
        const { taskactions } = this.props;
        var { deleteTask } = taskactions;
        deleteTask(task.id);
      }
    });
  };

  renderBoard() {
    var { listTask } = this.props;
    let xhtml = null;
    xhtml = (
      <Grid container spacing={3}>
        {STATUS.map((sta, index) => {
          const taskFilter = listTask.filter(
            (task) => task.status === sta.value
          );
          return (
            <TaskList
              taskFilter={taskFilter}
              sta={sta}
              key={index}
              onClickEdit={this.onClickEdit}
              onClickDelete={this.onClickDelete}
            ></TaskList>
          );
        })}
      </Grid>
    );
    return xhtml;
  }

  LoadData = () => {
    const { taskactions } = this.props;
    const { fetchListTask } = taskactions;
    fetchListTask();
  };

  handleChange = (event) => {
    var { target } = event;
    var value = target.type === "checkbox" ? "" : target.value;
    const { taskactions } = this.props;
    var { filterTask } = taskactions;
    filterTask(value);
  };

  renderSearchBox() {
    let xhtml = null;
    xhtml = <SearchBox handleChange={this.handleChange}></SearchBox>;
    return xhtml;
  }

  render() {
    return (
      <div>
        <Button
          variant="contained"
          onClick={this.LoadData}
          style={{ marginRight: 20 }}
        >
          Load Data
        </Button>
        <Button variant="contained" onClick={this.AddNewTask}>
          Thêm mới công việc <AddIcon></AddIcon>
        </Button>
        {this.renderSearchBox()}
        {this.renderBoard()}
      </div>
    );
  }
}

// taskboard.prototype = {
//   classes: Prototype.object,
//   taskactions: Prototype.shape({
//     fetchListTask: Prototype.func,
//   }),
// };

const mapStateToProps = (state) => {
  return {
    listTask: state.task.listTask,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    taskactions: bindActionCreators(taskactions, dispatch),
    modalactionsCr: bindActionCreators(modalactions, dispatch),
  };
};

export default withStyles(style)(
  connect(mapStateToProps, mapDispatchToProps)(taskboard)
);
