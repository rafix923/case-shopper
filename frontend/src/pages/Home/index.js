import React from "react";
import Header from "../../components/Header";
import Form from "../../components/Form";
import Product from "../../components/Product";

function Home() {
  let title = "Case Shopper Hortifruit";
  return (
    <div>
      <Header />
      <h1>{title}</h1>
      <Product />
      <hr/>
      <Form />
    </div>
  );
}

export default Home;
