import React, { useEffect, useState } from "react";
import { HeaderStyled } from "../../components/Header/style";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../routes/Coordinator";
import axios from "axios";

function InventoryPage() {
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

  let title = "Case Shopper Hortifruit";
  return (
    <div>
      <HeaderStyled>
        <button
          type="button"
          onClick={() => {
            goToHome(navigate);
          }}
        >
          Voltar para Home
        </button>
        <h1 id="header-title">{title}</h1>
      </HeaderStyled>
      <h2>Estoque</h2>
      <ul>
        {inventory.map((item) => (
          <li key={item.name}>
            {item.name} - Quantidade: {item.qty_stock}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InventoryPage;
