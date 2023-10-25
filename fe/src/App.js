import "./App.css";
import User from "./page/User";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
