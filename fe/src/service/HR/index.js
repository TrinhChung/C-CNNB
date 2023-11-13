import axios from "../../config/axios";

export const getApplier = (id = "", query) => {
  return axios.get(`/api/user/search/applier?hr_id=${id}&${query}`);
};

export const searchTaskHr = (id = "", query) => {
  return axios.get(`/api/task/search?hr_id=${id}&${query}`);
};

export const editTask = (id, data) => {
  return axios.put(`/api/task/update/${id}`, data);
};

export const getAppliersOfTask = (id) => {
  return axios.get(`/api/task/appliers/${id}`);
};

export const acceptApplier = (data) => {
  return axios.put(`/api/task/accept`, data);
};

export const rejectApplier = (data) => {
  return axios.put(`/api/task/reject`, data);
};
