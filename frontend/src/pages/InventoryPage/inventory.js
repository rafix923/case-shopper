import React from "react";
import { useNavigate } from "react-router-dom";
import { goToReturnPage } from "../../routes/Coordinator";

function InventoryPage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Inventory</h1>
      <button type="button" onClick={() => goToReturnPage(navigate)}>
        Retornar
      </button>
    </div>
  );
}

export default InventoryPage;
