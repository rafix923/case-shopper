import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import InventoryPage from "../pages/InventoryPage/inventory";
import Checkout from "../pages/CheckoutPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="checkout-page" element={<Checkout />} />
        <Route path="inventory" element={<InventoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
