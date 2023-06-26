import React, { useState } from "react";
import Header from "../../components/Header";
import Form from "../../components/Form";
import ProductList from "../../components/ProductList";
import { HomeMainContainer } from "./style";

function Home() {
  let title = "Cadastre um nome ou escolha um nome da lista";

  const [productList, setProductList] = useState([]);
  return (
    <HomeMainContainer>
      <Header />
      <h2>{title}</h2>
      <ProductList productList={productList} setProductList={setProductList} />
      <Form productList={productList} setProductList={setProductList} />
    </HomeMainContainer>
  );
}

export default Home;
