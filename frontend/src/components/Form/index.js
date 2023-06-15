import React from "react";
import { useRequestData } from "../../hooks/useRequestData";

function Form() {
  const [dataClient, isLoadingClient, errorClient] = useRequestData(
    "http://localhost:3003/client/list"
  );
  const [dataProduct, isLoadinProduct, errorProduct] = useRequestData(
    "http://localhost:3003/products/list"
  );

  return (
    <form>
      <div>
        <label htmlFor="client">Nome:</label>
        <input id="client" list="dataList"></input>
        <datalist id="dataList">
          {dataClient &&
            dataClient.map((client) => {
              return <option key={client.id}>{client.name}</option>;
            })}
        </datalist>
        <button>Confirmar</button>
      </div>
      <hr />
      <div>
        <label htmlFor="product">Produto:</label>
        <input id="product" list="productData"></input>
        <datalist id="productData">
          {dataProduct &&
            dataProduct.map((product) => {
              return <option key={product.id}>{product.name}</option>;
            })}
        </datalist>
        <label>Quantidade</label>
        <input id="qty" type="number"></input>
        <p>Valor Total: R$20,00</p>
        <button>Confirmar</button>
      </div>
      <hr />
      <div>
        <label htmlFor="deliveryDate">Data de entrega: (DD/MM/AAAA)</label>
        <input id="deliveryDate"></input>
        <button>Confirmar Pedido</button>
      </div>
    </form>
  );
}

export default Form;
