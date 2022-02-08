import {
  fork,
  take,
  call,
  put,
  delay,
  takeLatest,
  select,
} from "redux-saga/effects";
import * as TaskType from "./../contants/task";
import { Getlist, AddTask, putTask, deleteTask } from "./../apis/task";
import {
  fetchListTaskSucess,
  fetchListTaskFail,
  ShowLoading,
  HideLoading,
  filterTaskSuccess,
  addTaskSucess,
  addTaskFail,
  updateTaskSucess,
  updateTaskFail,
  deleteTaskSucess,
  deleteTaskFail,
} from "./../actions/task";
import { hidemodal } from "./../actions/modal";
import Swal from "sweetalert2";

function* watchFetchListTaskActions() {
  while (true) {
    yield take(TaskType.FETCH_TASK);
    yield put(ShowLoading());
    const respone = yield call(Getlist);
    const { data, status } = respone;
    if (status === 200) {
      yield put(fetchListTaskSucess(data));
    } else {
      yield put(fetchListTaskFail(data));
    }
    // yield delay(1000);
    yield put(HideLoading());
  }
}

function* FilterTaskSaga({ payload }) {
  yield delay(500);
  var { keyword } = payload;
  var list = yield select((state) => state.task.listTask);
  const filterTask = list.filter((task) =>
    task.title.toLowerCase().includes(keyword)
  );
  if (keyword !== "") {
    yield put(filterTaskSuccess(filterTask));
  } else {
    const respone = yield call(Getlist);
    const { data, status } = respone;
    if (status === 200) {
      yield put(filterTaskSuccess(data));
    }
  }
}

function* AddTaskSaga({ payload }) {
  yield put(ShowLoading());
  var { Title, Description } = payload;
  var data_ = {
    title: Title,
    description: Description,
    status: 0,
  };
  const respone_ = yield call(AddTask, data_);
  const { data, status } = respone_;
  if (status === 201) {
    yield put(addTaskSucess(data));
    yield put(hidemodal(data));
  } else {
    yield put(addTaskFail(data));
  }
  // yield delay(1000);
  yield put(HideLoading());
}

function* UpdateTaskSaga({ payload }) {
  yield put(ShowLoading());
  var { Title, Description, Status, id } = payload;
  var data_ = {
    title: Title,
    description: Description,
    status: Status,
  };
  const respone_ = yield call(putTask, data_, id);
  const { data, status } = respone_;
  if (status === 200) {
    yield put(updateTaskSucess(data));
    yield put(hidemodal(data));
  } else {
    yield put(updateTaskFail(data));
  }
  yield delay(1000);
  yield put(HideLoading());
}

function* DeleteTaskSaga({ payload }) {
  yield put(ShowLoading());
  var { id } = payload;
  const respone_ = yield call(deleteTask, id);
  const { data, status } = respone_;
  if (status === 200) {
    yield put(deleteTaskSucess(data));
    Swal.fire({
      text: "Xóa task thành công ",
      icon: "success",
      showConfirmButton: false,
    });
  } else {
    yield put(deleteTaskFail(data));
  }
  yield put(HideLoading());
}

function* rootSaga() {
  yield fork(watchFetchListTaskActions);
  yield takeLatest(TaskType.FILTER_TASK, FilterTaskSaga);
  yield takeLatest(TaskType.ADD_TASK, AddTaskSaga);
  yield takeLatest(TaskType.UPDATE_TASK, UpdateTaskSaga);
  yield takeLatest(TaskType.DELETE_TASK, DeleteTaskSaga);
}

export default rootSaga;
