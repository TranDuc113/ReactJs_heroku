//  import * as taskapi from "./../apis/task";
import * as taskConstants from "./../contants/task";
// import * as type from "./../contants/task";

export const fetchListTask = () => {
  return {
    type: taskConstants.FETCH_TASK,
  };
};

export const fetchListTaskSucess = (data) => {
  return {
    type: taskConstants.FETCH_TASK_SUCESS,
    payload: {
      data,
    },
  };
};

export const fetchListTaskFail = (error) => {
  return {
    type: taskConstants.FETCH_TASK_FAILED,
    payload: {
      error,
    },
  };
};

export const ShowLoading = () => ({
  type: taskConstants.SHOW_LOADING,
});

export const HideLoading = () => ({
  type: taskConstants.HIDE_LOADING,
});

export const filterTask = (keyword) => ({
  type: taskConstants.FILTER_TASK,
  payload: {
    keyword,
  },
});

export const filterTaskSuccess = (data) => ({
  type: taskConstants.FILTER_TASK_SUCCESS,
  payload: {
    data,
  },
});

export const addTask = (Title, Description) => {
  return {
    type: taskConstants.ADD_TASK,
    payload: {
      Title,
      Description,
    },
  };
};

export const addTaskSucess = (data) => {
  return {
    type: taskConstants.ADD_TASK_SUCCES,
    payload: {
      data,
    },
  };
};

export const addTaskFail = (error) => {
  return {
    type: taskConstants.ADD_TASK_FAILED,
    payload: {
      error,
    },
  };
};

export const setTaskEditing = (task) => {
  return {
    type: taskConstants.SET_TASK_EDITTING,
    payload: {
      task,
    },
  };
};

export const updateTask = (Title, Description, Status = 0, id) => {
  return {
    type: taskConstants.UPDATE_TASK,
    payload: {
      Title,
      Description,
      Status,
      id,
    },
  };
};

export const updateTaskSucess = (data) => {
  return {
    type: taskConstants.UPDATE_TASK_SUCCES,
    payload: {
      data,
    },
  };
};

export const updateTaskFail = (error) => {
  return {
    type: taskConstants.UPDATE_TASK_FAILED,
    payload: {
      error,
    },
  };
};

export const deleteTask = (id) => {
  return {
    type: taskConstants.DELETE_TASK,
    payload: {
      id,
    },
  };
};

export const deleteTaskSucess = (data) => {
  return {
    type: taskConstants.DELETE_TASK_SUCCES,
    payload: {
      data,
    },
  };
};

export const deleteTaskFail = (error) => {
  return {
    type: taskConstants.DELETE_TASK_FAILED,
    payload: {
      error,
    },
  };
};

export const ShowSlideBar = () => ({
  type: taskConstants.SHOW_SLIDE_BAR,
});

export const HideSlideBar = () => ({
  type: taskConstants.HIDE_SLIDE_BAR,
});
// export const fetchListTaskAPI = () => {
//   return (dispatch) => {
//     dispatch(fetchListTask);
//     taskapi
//       .Getlist()
//       .then((res) => {
//         dispatch(fetchListTaskSucess(res.data));
//       })
//       .catch((err) => {
//         dispatch(fetchListTaskFail(err));
//       });
//   };
// };
