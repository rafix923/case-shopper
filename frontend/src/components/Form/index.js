import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRequestData } from "../../hooks/useRequestData";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { goToCheckoutPage } from "../../routes/Coordinator";
import { BASE_URL } from "../../constants/url/baseUrl";
import {
  BoxClient,
  FormMainContainer,
  SelectedClient,
  BoxProduct,
  DeliveryDate,
} from "./style";

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
    visibleButtonClient,
    setVisibleButtonClient,
  ] = useRequestData(`${BASE_URL}/client/list`);

  const [productData, isLoadingProduct, errorProduct, visibleButtonProduct] =
    useRequestData(`${BASE_URL}/products/list`);

  const [selectClient, setSelectClient] = useState(null);
  const [selectProduct, setSelectProduct] = useState(null);

  useEffect(() => {
    if (dataClient) {
      const chosenClient = dataClient.find(
        (client) => client.name === form.client
      );
      setSelectClient(chosenClient);
    }
  }, [dataClient, form.client]);

  const registerNewClient = () => {
    const body = {
      name: form.client,
    };
    axios
      .post(`${BASE_URL}/client/add`, body, {})
      .then((response) => {
        setVarCheck(!varCheck);
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const selectedClient = () => {
    setVisibleButtonClient(!visibleButtonClient);
  };

  useEffect(() => {
    if (productData) {
      const chosenProduct = productData.find(
        (product) => product.name === form.product
      );
      setSelectProduct(chosenProduct);
    }
  }, [productData, form.product]);

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

      const currentDate = new Date();
      const selectedDate = new Date(
        parseInt(form.deliveryDate.split("/")[2]),
        parseInt(form.deliveryDate.split("/")[1]) - 1,
        parseInt(form.deliveryDate.split("/")[0])
      );

      if (selectedDate < currentDate) {
        window.alert("A data de entrega não pode ser anterior à data atual.");
        return;
      }

      const productListDb = productList.map((p) => {
        return { id: p.id, qty: Number(p.qty) };
      });

      const body = {
        fk_client: Number(selectClient.id),
        delivery_date: deliveryDateDb,
        products: productListDb,
      };
      axios
        .post(`${BASE_URL}/order/add/new`, body, {})
        .then((response) => {
          console.log(response);
          goToCheckoutPage(navigate);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  return (
    <FormMainContainer onSubmit={createOrder}>
      {selectClient && !visibleButtonClient && (
        <SelectedClient>
          <h2>Cliente: {selectClient.name}</h2>
        </SelectedClient>
      )}
      {(selectClient && !visibleButtonClient) || (
        <BoxClient>
          <div id="content">
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
            {selectClient && visibleButtonClient && (
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
        </BoxClient>
      )}
      {selectClient && !visibleButtonClient && (
        <BoxProduct>
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
              {isLoadingProduct && !productData && (
                <option>Carregando..</option>
              )}
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
        </BoxProduct>
      )}
      {productList.length > 0 && (
        <DeliveryDate>
          <label htmlFor="deliveryDate">Data de entrega:</label>
          <input
            id="deliveryDate"
            name="deliveryDate"
            pattern="\d{2}/\d{2}/\d{4}"
            placeholder="dd/mm/aaaa"
            onChange={onChange}
            value={form.deliveryDate}
          ></input>
          <button type="submit">Confirmar Pedido</button>
        </DeliveryDate>
      )}
    </FormMainContainer>
  );
}

export default Form;
