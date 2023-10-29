import { createContext, useEffect, useState } from "react";
import { loginMe } from "../../service/Auth";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const handlerLogin = async () => {
      const res = await loginMe();
      if (res.success === 1 && res.data) {
        setAuthUser(res.data);
      }
    };

    if (!authUser) {
      handlerLogin();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
}
