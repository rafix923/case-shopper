import React from "react";
import Header from "../../components/Header";
import Form from "../../components/Form";

function Home() {
  let title = "Boas vindas ao nosso Hortifruit";
  return (
    <div>
      <Header />
      <h1>{title}</h1>
      <Form />
    </div>
  );
}

export default Home;
