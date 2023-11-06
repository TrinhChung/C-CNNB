import "./App.css";
import User from "./page/User";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HR from "./page/HR";
import Company from "./page/Company";
import Auth from "./page/Auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "./provider/authProvider";
import React, { useContext, useState, useEffect } from "react";
import AnimationLayout from "./layout/AnimationLayout/AnimationLayout";
import Loading from "./page/Loading/Loading";
function App() {
  const { authUser, setAuthUser } = useContext(AuthContext);
  const [token, setToken] = useState(localStorage.getItem("accessToken"));
  useEffect(() => {
    setToken(localStorage.getItem("accessToken"));
  }, [authUser]);
  const role = authUser && authUser.role ? authUser.role : null;

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AnimationLayout />}>
          {!authUser && !token ? (
            <Route path="/*" element={<Auth />} />
          ) : role === "0" ? (
            <Route path="/*" element={<User />} />
          ) : role === "1" ? (
            <Route path="/*" element={<HR />} />
          ) : role === "2" ? (
            <Route path="/*" element={<Company />} />
          ) : (
            <Route path="/*" element={<Loading />} />
          )}
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        newestOnTop={true}
        closeOnClick
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        draggable
        style={{ textAlign: "left" }}
      />
    </BrowserRouter>
  );
}

export default App;
