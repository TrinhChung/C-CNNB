import "./App.css";
import User from "./page/User";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HR from "./page/HR";
import Company from "./page/Company";
function App() {
  const role = 2;
  return (
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
  );
}

export default App;
