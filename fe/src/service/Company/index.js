import axios from "../../config/axios";

export const getCompaniesService = (page, query) => {
  return axios.get(`/api/company/search?page=${page}&${query}`);
};

export const detailCompany = (id) => {
  return axios.get(`/api/company/info/${id}`);
};

export const postTask = (data) => {
  return axios.post("/api/task/new", data);
};

export const getInfoCompany = (id) => {
  return axios.get(`/api/company/info/${id}`);
};

export const searchTaskCompany = (page, id, query) => {
  return axios.get(
    `/api/task/search?page=${page}&company_id=${id}&query=${query}`
  );
};

export const searchHRCompany = (page, query) => {
  return axios.get(`/api/user/search/hr?page=${page}&${query}`);
};

export const editProfileCompany = (id, data) => {
  return axios.put(`/api/company/update/${id}`, data);
};

export const acceptHr = (id, data) => {
  return axios.put(`/api/company/accept?hr_id=${id}`, data);
};
