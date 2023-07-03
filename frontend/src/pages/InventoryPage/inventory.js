import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../routes/Coordinator";
import axios from "axios";
import {
  InventoryHeaderButton,
  InventoryHeaderStyled,
  InventoryMainContainer,
  InventorySubtitle,
  OrderedListContainer,
} from "./style";

function InventoryPage() {
  let title = "Case Shopper Hortifruit";

  const navigate = useNavigate();
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await axios.get(
          "https://case-shopper-backend.vercel.app/inventory"
        );
        setInventory(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchInventory();
  }, []);

  return (
    <InventoryMainContainer>
      <InventoryHeaderStyled>
        <InventoryHeaderButton
          type="button"
          onClick={() => {
            goToHome(navigate);
          }}
        >
          Voltar para Home
        </InventoryHeaderButton>
        <h1 id="header-title">{title}</h1>
      </InventoryHeaderStyled>
      <InventorySubtitle>Estoque</InventorySubtitle>
  <OrderedListContainer>
  <ol>
        {inventory.map((item) => (
          <li key={item.name}>
            {item.name} - Quantidade: {item.qty_stock}
          </li>
        ))}
      </ol>
  </OrderedListContainer>
    </InventoryMainContainer>
  );
}

export default InventoryPage;
