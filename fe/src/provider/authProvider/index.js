import { createContext, useEffect, useState } from "react";
import { loginMe } from "../../service/Auth";
import {
  getCategories as getCategoriesService,
  getAddress as getAddressService,
  getCompanies as getCompaniesService,
  getExps as getExpsService,
  getSkills as getSkillsService,
  getTypes as getTypesService,
  getAllYears as getBirthYearsService,
} from "../../service/User";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [categories, setCategories] = useState([]);
  const [addresses, setAddress] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [exps, setExps] = useState([]);
  const [skills, setSkills] = useState([]);
  const [types, setTypes] = useState([]);
  const [birthYears, setBirthYears] = useState([]);

  const handlerLogin = async () => {
    const userLocal = JSON.parse(localStorage.getItem("user"));

    if (userLocal) {
      setAuthUser(userLocal);
    } else {
      const res = await loginMe();
      if (res.success === 1 && res.data) {
        setAuthUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
      }
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

  const getTypes = async () => {
    const res = await getTypesService();
    if (res.success === 1 && res.data) {
      setTypes(res.data);
    }
  };

  const getSkills = async () => {
    const res = await getSkillsService();
    if (res.success === 1 && res.data) {
      setSkills(res.data);
    }
  };

  const getBirthYears = async () => {
    const res = await getBirthYearsService();
    if (res.success === 1 && res.data) {
      setBirthYears(res.data);
    }
  };

  const getCompanies = async () => {
    const res = await getCompaniesService();
    if (res.success === 1 && res.data) {
      setCompanies(res.data);
    }
  };

  const getAddress = async () => {
    const res = await getAddressService();
    if (res.success === 1 && res.data) {
      setAddress(res.data);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!authUser && token) {
      handlerLogin();
    }
  }, []);

  useEffect(() => {
    if (authUser) {
      getCategories();
      getAddress();
      getExps();
      getSkills();
      getTypes();
      getBirthYears();
    }
    getCompanies();
  }, [authUser]);

  return (
    <AuthContext.Provider
      value={{
        authUser,
        categories,
        addresses,
        birthYears,
        companies,
        exps,
        skills,
        types,
        setAuthUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
