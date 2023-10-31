import { createContext, useEffect, useState } from "react";
import { loginMe } from "../../service/Auth";
import {
  getCategories as getCategoriesService,
  getAddress as getAddressService,
  getCompanies as getCompaniesService,
  getExps as getExpsService,
} from "../../service/User";
import { buildAddress } from "../../const/buildData";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [categories, setCategories] = useState([]);
  const [addresses, setAddress] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [exps, setExps] = useState([]);

  const handlerLogin = async () => {
    const res = await loginMe();
    if (res.success === 1 && res.data) {
      setAuthUser(res.data);
    }
  };

  const getCategories = async () => {
    const res = await getCategoriesService();
    if (res.success === 1 && res.data) {
      setCategories(res.data);
    }
  };

  const getExps = async () => {
    const res = await getExpsService();
    if (res.success === 1 && res.data) {
      setExps(res.data);
    }
  };

  const getCompanies = async () => {
    const res = await getCompaniesService();
    if (res.success === 1 && res.data) {
      const companies = await buildAddress(res.data);
      setCompanies(companies);
    }
  };

  const getAddress = async () => {
    const res = await getAddressService();
    if (res.success === 1 && res.data) {
      setAddress(res.data);
    }
  };

  useEffect(() => {
    if (!authUser) {
      handlerLogin();
    }
    getCategories();
    getAddress();
    getCompanies();
    getExps();
  }, []);

  return (
    <AuthContext.Provider
      value={{ authUser, categories, addresses, companies, exps, setAuthUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
