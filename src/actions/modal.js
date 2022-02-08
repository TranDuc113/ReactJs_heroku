import * as taskConstants from "./../contants/task";

export const showmodal = () => {
  return {
    type: taskConstants.SHOW_MODAL,
  };
};

export const hidemodal = () => {
  return {
    type: taskConstants.HIDE_MODAL,
  };
};

export const changemodaltitle = (title) => {
  return {
    type: taskConstants.CHANGE_MODAL_TITLE,
    payload: {
      title,
    },
  };
};

export const changemodalcontent = (component) => {
  return {
    type: taskConstants.CHANGE_MODAL_CONTENT,
    payload: {
      component,
    },
  };
};
