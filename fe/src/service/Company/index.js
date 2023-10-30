import axios from "../../config/axios";

export const getCompaniesService = (page) => {
  return axios.get(`/api/company/all?page=${page}`);
};

export const detailCompany = (id) => {
  return axios.get(`/api/company/info/${id}`);
};
