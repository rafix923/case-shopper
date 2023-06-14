import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Farewell from "../pages/Farewell";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="end-page" element={<Farewell />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
