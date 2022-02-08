import { toast } from "react-toastify";
import adminHomePage from "./../container/adminHomePage/index";
import TaskBoard from "./../container/taskboard/index";

export const API_ENDPOINT = "https://61d456db8df81200178a8c2e.mockapi.io/api/";

export const STATUS = [
  {
    value: 0,
    label: "READY",
  },
  {
    value: 1,
    label: "IN PROGRESS",
  },
  {
    value: 2,
    label: "COMPLETE",
  },
];

export const toastError = (error) => {
  if (typeof error !== "undefined" && error.message) {
    var { message } = error;
    if (message !== null && typeof message !== "undefined" && message !== "") {
      toast.error(message);
    }
  }
};

export const ADMIN_ROUTES = [
  {
    path: "/",
    name: "Trang quản trị",
    exact: true,
    component: adminHomePage,
  },
  {
    path: "/task-board",
    name: "Quản lý công việc",
    exact: true,
    component: TaskBoard,
  },
];
