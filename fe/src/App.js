import "./App.css";
import User from "./page/User";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HR from "./page/HR";
import Company from "./page/Company";
import AuthProvider from "./provider/authProvider";
function App() {
  const role = 0;
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {role === 0 ? (
            <Route path="/*" element={<User />} />
          ) : role === 1 ? (
            <Route path="/*" element={<HR />} />
          ) : (
            <Route path="/*" element={<Company />} />
          )}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
