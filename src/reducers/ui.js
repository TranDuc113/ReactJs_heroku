import * as type from "./../contants/task";

const initialState = {
  showLoading: false,
  showsildebar: true,
};
const reducers = (state = initialState, actions) => {
  switch (actions.type) {
    case type.SHOW_LOADING:
      return {
        ...state,
        showLoading: true,
      };
    case type.HIDE_LOADING:
      return {
        ...state,
        showLoading: false,
      };
    case type.SHOW_SLIDE_BAR:
      return {
        ...state,
        showsildebar: true,
      };
    case type.HIDE_SLIDE_BAR:
      return {
        ...state,
        showsildebar: false,
      };
    default:
      return state;
  }
};
export default reducers;
