import React from "react";
import { HeaderStyled } from "./style";

function Header() {
  let title = "Case Shopper Hortifruit";
  return (
    <HeaderStyled>
      <h1 id="header-title">{title}</h1>
    </HeaderStyled>
  );
}

export default Header;
