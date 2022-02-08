import * as type from "./../contants/task";

const initialState = {
  showmodal: false,
  component: null,
  title: "",
};
const reducers = (state = initialState, actions) => {
  switch (actions.type) {
    case type.SHOW_MODAL:
      return {
        ...state,
        showmodal: true,
      };
    case type.HIDE_MODAL:
      return {
        ...state,
        showmodal: false,
        component: null,
        title: "",
      };
    case type.CHANGE_MODAL_TITLE:
      var { title } = actions.payload;
      return {
        ...state,
        title,
      };
    case type.CHANGE_MODAL_CONTENT:
      var { component } = actions.payload;
      return {
        ...state,
        component,
      };
    default:
      return state;
  }
};
export default reducers;
