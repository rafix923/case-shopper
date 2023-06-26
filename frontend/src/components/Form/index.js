import React from "react";
import axios from "axios";
import { useRequestData } from "../../hooks/useRequestData";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { goToEndPage } from "../../routes/Coordinator";

function Form({ productList, setProductList }) {
  const navigate = useNavigate();
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

  const [productData, isLoadingProduct, errorProduct, visibleButtonProduct] =
    useRequestData("http://localhost:3003/products/list");

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
    !isLoadingProduct &&
    productData &&
    productData.find((choosedProduct) => {
      return choosedProduct.name === form.product;
    });

  const addProduct = () => {
    const newProduct = selectProduct;
    newProduct.qty = form.qty;
    setProductList([...productList, newProduct]);
  };

  const createOrder = (e) => {
    e.preventDefault();
    if (!productList || !form.deliveryDate || !selectClient) {
      window.alert(
        "Por favor, verifique se todos os dados foram preenchidos corretamente."
      );
    } else {
      const deliveryDateDb = `${form.deliveryDate.split("/")[2]} - ${
        form.deliveryDate.split("/")[1]
      }-${form.deliveryDate.split("/")[0]}`;
      const productListDb = productList.map((p) => {
        return { "id": p.id, "qty": Number(p.qty) };
      });
      const body = {
        "fk_client": Number(selectClient.id),
        "delivery_date": deliveryDateDb,
        "products": productListDb,
      };
      axios
        .post("http://localhost:3003/order/add/new", body, {})
        .then((response) => {
          console.log(response);
          goToEndPage(navigate);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  return (
    <form onSubmit={createOrder}>
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
              Cadastrar cliente
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
      {selectClient && !visebleButtonClient && (
        <div id="select-product">
          <label htmlFor="product">Produto:</label>
          <input
            id="product"
            list="productData"
            name="product"
            value={form.product}
            onChange={onChange}
          ></input>
          <datalist id="productData">
            {isLoadingProduct && !productData && <option>Carregando..</option>}
            {!isLoadingProduct &&
              productData &&
              productData.map((product) => {
                return <option key={product.id}>{product.name}</option>;
              })}
          </datalist>
          <label htmlFor="qty">Quantidade:</label>
          <input
            id="qty"
            type={"number"}
            name="qty"
            value={form.qty}
            onChange={onChange}
          ></input>
          <p>
            Valor Total: R$:{" "}
            {selectProduct &&
              parseFloat(selectProduct.price * form.qty).toFixed(2)}
          </p>

          {selectProduct &&
            !visibleButtonProduct &&
            selectProduct.qty_stock >= form.qty && (
              <button
                type="button"
                onClick={() => {
                  addProduct();
                }}
              >
                Adicionar produto
              </button>
            )}
          {selectProduct && selectProduct.qty_stock < form.qty && (
            <h3>Atenção! Produto sem estoque suficiente para esta compra.</h3>
          )}
        </div>
      )}
      <hr />
      <div>
        <label htmlFor="deliveryDate">Data de entrega: (DD/MM/AAAA)</label>
        <input
          id="deliveryDate"
          name="deliveryDate"
          onChange={onChange}
          value={form.deliveryDate}
        ></input>
        <button type="submit">Confirmar Pedido</button>
      </div>
    </form>
  );
}

export default Form;
