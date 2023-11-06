import axios from "../../config/axios";

export const getApplier = () => {
  return axios.get("/api/user/applied");
};
