import axios from "../../config/axios";

export const getTask = () => {
  return axios.get("/api/task/all");
};

export const taskRecommend = () => {
  return axios.get("/api/recommend");
};

export const getInfoTask = (id) => {
  return axios.get(`/api/task/info/${id}`);
};
