import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Farewell from "../pages/Farewell";
import InventoryPage from "../pages/InventoryPage/inventory";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="end-page" element={<Farewell />} />
        <Route path="inventory" element={<InventoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
