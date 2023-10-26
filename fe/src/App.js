import "./App.css";
import User from "./page/User";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HR from "./page/HR";
function App() {
  const role = 1;
  return (
    <BrowserRouter>
      <Routes>
        {role === 0 ? (
          <Route path="/*" element={<User />} />
        ) : role === 1 ? (
          <Route path="/*" element={<HR />} />
        ) : (
          <></>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
