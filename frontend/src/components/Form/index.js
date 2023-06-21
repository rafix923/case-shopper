import React from "react";
import { useRequestData } from "../../hooks/useRequestData";
import { useForm } from "../../hooks/useForm";
import axios from "axios";

function Form() {
  const [form, onChange, resetState] = useForm({
    client: "",
    product: "",
    qty: 1,
    deliveryDate: "",
  });

  const [
    dataClient,
    isLoadingClient,
    errorClient,
    varCheck,
    setVarCheck,
    visebleButtonClient,
    setVisibleButtonClient,
  ] = useRequestData("http://localhost:3003/client/list");

  const [dataProduct, isLoadinProduct, errorProduct] = useRequestData(
    "http://localhost:3003/products/list"
  );

  const selectClient =
    !isLoadingClient &&
    dataClient &&
    dataClient.find((choosedClient) => {
      return choosedClient.name === form.client;
    });

  const registerNewClient = () => {
    const body = {
      name: form.client,
    };
    axios
      .post("http://localhost:3003/client/add", body, {})
      .then((response) => {
        setVarCheck(!varCheck);
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const selectedClient = () => {
    setVisibleButtonClient(!visebleButtonClient);
  };

  const selectProduct =
    !isLoadinProduct &&
    dataProduct &&
    dataProduct.find((choosedProduct) => {
      return choosedProduct.name === form.product;
    });
  return (
    <form>
      {selectClient && !visebleButtonClient && (
        <div>
          <h2>Cliente:{selectClient.name}</h2>
        </div>
      )}
      {(selectClient && !visebleButtonClient) || (
        <div>
          <label htmlFor="client">Nome:</label>
          <input
            id="client"
            list="dataList"
            onChange={onChange}
            value={form.client}
            name="client"
          ></input>
          <datalist id="dataList">
            {dataClient &&
              dataClient.map((client) => {
                return <option key={client.id}>{client.name}</option>;
              })}
          </datalist>
          {!selectClient && form.client.length > 8 && (
            <button
              type="button"
              onClick={() => {
                registerNewClient();
              }}
            >
              Cadastrar
            </button>
          )}
          {selectClient && visebleButtonClient && (
            <button
              type="button"
              onClick={() => {
                selectedClient();
              }}
            >
              Confirmar
            </button>
          )}
        </div>
      )}
      <hr />
      <div>
        <label htmlFor="product">Produto:</label>
        <input
          id="product"
          list="productData"
          name="product"
          value={form.product}
          onChange={onChange}
        ></input>
        <datalist id="productData">
          {dataProduct &&
            dataProduct.map((product) => {
              return <option key={product.id}>{product.name}</option>;
            })}
        </datalist>
        <label htmlFor="qty">Quantidade</label>
        <input
          id="qty"
          type="number"
          name="qty"
          value={form.qty}
          onChange={onChange}
        ></input>
        <p>
          Valor Total: R${" "}
          {selectProduct &&
            parseFloat(selectProduct.price * form.qty).toFixed(2)}
        </p>
        {selectProduct && <button>Confirmar</button>}
        {selectProduct && selectProduct.qty_stock < form.qty && (
          <h3>Atenção! Produto sem estoque.</h3>
        )}
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
