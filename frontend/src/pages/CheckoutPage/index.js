import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../routes/Coordinator";

function Checkout() {
  let title = "Seu pedido foi registrado com sucesso!";
  const navigate = useNavigate();
  setTimeout(() => {
    goToHome(navigate);
  },3000);
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

export default Checkout;
