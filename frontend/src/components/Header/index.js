import React from "react";
import { HeaderStyled } from "./style";
import { useNavigate } from "react-router-dom";
import { goToInventoryPage } from "../../routes/Coordinator";

function Header() {
  const navigate = useNavigate();
  let title = "Case Shopper Hortifruit";
  return (
    <HeaderStyled>
      <h1 id="header-title">{title}</h1>
      <button type="button" onClick={() => goToInventoryPage(navigate)}>
        Ver estoque
      </button>
    </HeaderStyled>
  );
}

export default Header;
