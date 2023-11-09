import axios from "../../config/axios";

export const getApplier = (id = "", query) => {
  return axios.get(`/api/user/search/applier?hr_id=${id}&${query}`);
};

export const searchTaskHr = (id) => {
  return axios.get(`/api/user/hr/task/${id}`);
};
