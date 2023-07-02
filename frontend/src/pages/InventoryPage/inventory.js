import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";

function InventoryPage() {
  const navigate = useNavigate();
  const {
    selectedClient,
    selectedProduct,
    setSelectedClient,
    setSelectedProduct,
  } = useContext(AppContext);

  const handleReturn = () => {
    setSelectedClient(null); // Limpa o valor do cliente selecionado
    setSelectedProduct(null); // Limpa o valor do produto selecionado
    navigate(-1); // Retorna para a página anterior
  };

  return (
    <div>
      <h1>Inventory</h1>
      {/* Renderize os dados selecionados */}
      <p>
        Cliente selecionado:{" "}
        {selectedClient ? selectedClient.name : "Nenhum cliente selecionado"}
      </p>
      <p>
        Produto selecionado:{" "}
        {selectedProduct ? selectedProduct.name : "Nenhum produto selecionado"}
      </p>
      <button type="button" onClick={() => handleReturn()}>
        Retornar
      </button>
    </div>
  );
}

export default InventoryPage;
