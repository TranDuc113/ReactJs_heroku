import { combineReducers } from "redux";
import TaskReducers from "./task";
import uiReducers from "./ui";
import modalReducers from "./modal";
import { reducer as formReducer } from 'redux-form'

const rootReducers = combineReducers({
  ui: uiReducers,
  task: TaskReducers,
  modal: modalReducers,
  form: formReducer
});
export default rootReducers;
