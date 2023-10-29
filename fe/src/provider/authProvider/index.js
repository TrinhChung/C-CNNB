import { createContext, useEffect, useState } from "react";
import jwt from "jwt-decode";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const now = new Date();
    const localAccessToken = JSON.parse(localStorage.getItem("accessToken"));
    if (localAccessToken)
      if (now.getTime() <= localAccessToken.expiry) {
        if (!authUser) {
          const user = jwt(localAccessToken.value);
          setAuthUser(user);
        }
      }
  }, [authUser]);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
}
