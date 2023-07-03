import React from "react";
import { HeaderStyled } from "../../components/Header/style";

function InventoryPage() {
  let title = "Case Shopper Hortifruit";
  return (
    <div>
      <HeaderStyled>
        <button>Voltar para Home</button>
        <h1 id="header-title">{title}</h1>
      </HeaderStyled>
      <h2>Estoque</h2>
    </div>
  );
}

export default InventoryPage;
