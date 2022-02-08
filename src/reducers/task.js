import * as taskConstants from "./../contants/task";
import { toastError } from "./../contants/index";

const initialState = {
  listTask: [],
  taskEditting: null,
};
const reducers = (state = initialState, actions) => {
  switch (actions.type) {
    case taskConstants.FETCH_TASK:
      return {
        ...state,
        listTask: [],
      };
    case taskConstants.FETCH_TASK_SUCESS:
      const { data } = actions.payload;
      return {
        ...state,
        listTask: data,
      };
    case taskConstants.FETCH_TASK_FAILED:
      const { error } = actions.payload;
      toastError(error);
      return {
        ...state,
        listTask: [],
      };
    case taskConstants.ADD_TASK:
      return {
        ...state,
        taskEditting: null,
      };
    case taskConstants.ADD_TASK_SUCCES:
      const data_ = actions.payload.data;
      return {
        ...state,
        listTask: state.listTask.concat([data_]),
      };
    case taskConstants.ADD_TASK_FAILED:
      const error_ = actions.payload.error;
      toastError(error_);
      return {
        ...state,
      };
    case taskConstants.FILTER_TASK_SUCCESS:
      var Data = actions.payload.data;
      return {
        ...state,
        listTask: Data,
      };
    case taskConstants.SET_TASK_EDITTING:
      var { task } = actions.payload;
      var EditTask;
      if (task === null) {
        EditTask = null;
      } else {
        EditTask = {
          Title: task ? task.title : null,
          MoTa: task ? task.description : null,
          id: task ? task.id : null,
          status: task ? task.status : null,
        };
      }
      return {
        ...state,
        taskEditting: EditTask,
      };
    case taskConstants.UPDATE_TASK:
      return {
        ...state,
      };
    case taskConstants.UPDATE_TASK_SUCCES:
      const data_update = actions.payload.data;
      const listTask = state.listTask;
      const index = listTask.findIndex((item) => item.id === data_update.id);
      if (index !== -1) {
        const newList = [
          ...listTask.slice(0, index),
          data_update,
          ...listTask.slice(index + 1),
        ];
        return {
          ...state,
          listTask: newList,
        };
      }
      return {
        ...state,
      };
    case taskConstants.UPDATE_TASK_FAILED:
      const error_update = actions.payload.error;
      toastError(error_update);
      return {
        ...state,
      };
    case taskConstants.DELETE_TASK:
      return {
        ...state,
      };
    case taskConstants.DELETE_TASK_SUCCES:
      const data_delete = actions.payload.data;
      return {
        ...state,
        listTask: state.listTask.filter((item) => item.id !== data_delete.id),
      };
    case taskConstants.DELETE_TASK_FAILED:
      const error_delete = actions.payload.error;
      toastError(error_delete);
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default reducers;
