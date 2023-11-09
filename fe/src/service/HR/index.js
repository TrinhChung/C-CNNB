import axios from "../../config/axios";

export const getApplier = (id = "", query) => {
  return axios.get(`/api/user/search/applier?hr_id=${id}&${query}`);
};
