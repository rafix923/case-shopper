import React, { useState } from "react";
import Header from "../../components/Header";
import Form from "../../components/Form";
import ProductList from "../../components/ProductList";

function Home() {
  let title = "Case Shopper Hortifruit";

  const [productList, setProductList] = useState([]);
  return (
    <div>
      <Header />
      <h1>{title}</h1>
      <ProductList productList={productList} setProductList={setProductList} />
      <Form productList={productList} setProductList={setProductList} />
    </div>
  );
}

export default Home;
