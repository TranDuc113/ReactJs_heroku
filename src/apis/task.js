import axiosService from "../commons/axiosService";
import { API_ENDPOINT } from "./../contants/index";

const url = "/Tasks";

export const Getlist = () => {
  return axiosService.get(API_ENDPOINT + "/" + url);
};

export const AddTask = (data) => {
  return axiosService.post(API_ENDPOINT + "/" + url, data);
};

export const putTask = (data, tashID) => {
  return axiosService.put(API_ENDPOINT + "/" + url + "/" + tashID, data);
};

export const deleteTask = (tashID) => {
  return axiosService.delete(API_ENDPOINT + "/" + url + "/" + tashID);
};
