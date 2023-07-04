import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../routes/Coordinator";
import {
  CheckoutTitleContainer,
  HeaderCheckoutStyled,
  CheckoutMessage,
  BodyCheckoutContainer,
} from "./style";

function Checkout() {
  const headerCheckoutTitle = "Case Shopper Hortfruit";
  let message = "Seu pedido foi registrado com sucesso!";
  const navigate = useNavigate();
  setTimeout(() => {
    goToHome(navigate);
  }, 3000);
  return (
    <div>
      <HeaderCheckoutStyled>
        <CheckoutTitleContainer>{headerCheckoutTitle}</CheckoutTitleContainer>
      </HeaderCheckoutStyled>
      <BodyCheckoutContainer>
        <CheckoutMessage>
          <h2>{message}</h2>
        </CheckoutMessage>
      </BodyCheckoutContainer>
    </div>
  );
}

export default Checkout;
