import axios from "../../config/axios";

export const getTask = (page, query) => {
  return axios.get(`/api/task/search?page=${page}&${query}`);
};

export const taskRecommend = () => {
  return axios.get("/api/task/recommend");
};

export const getInfoTask = (id) => {
  return axios.get(`/api/task/info/${id}`);
};

export const getProfileUser = (id) => {
  return axios.get(`/api/profile/info/${id}`);
};

export const getCategories = () => {
  return axios.get(`/api/category/all`);
};

export const getAddress = () => {
  return axios.get(`/api/address/all`);
};

export const getBirthYears = () => {
  return axios.get(`/api/birthyear/`);
};

export const getCompanies = () => {
  return axios.get(`/api/company/selection/`);
};

export const getExps = () => {
  return axios.get(`/api/exp/all`);
};

export const getSkills = () => {
  return axios.get("/api/skill/all");
};

export const getTypes = () => {
  return axios.get("/api/type/all");
};

export const updateProfile = (data) => {
  return axios.put("/api/profile/update", data);
};

export const updateUser = (id, data) => {
  return axios.put(`/api/user/update/${id}`, data);
};

export const getInfoHr = (id) => {
  return axios.get(`/api/user/hr/info/${id}`);
};

export const applyTask = (id) => {
  return axios.post(`/api/user/apply/${id}`);
};

export const saveTask = (id) => {
  return axios.post(`/api/user/save/${id}`);
};

export const getSavedTasks = () => {
  return axios.get(`/api/user/saved`);
};

export const getAppliedTasks = () => {
  return axios.get(`/api/user/applied`);
};

export const getAllYears = () => {
  return axios.get(`/api/birthyear/`);
};

export const getDataFooter = () => {
  return axios.get(`/api/footer/metadata`);
};
