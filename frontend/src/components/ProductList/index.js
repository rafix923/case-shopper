import React from "react";
import Product from "../Product";

function ProductList({ productList, setProductList }) {
  const removeProduct = (id) => {
    const newProductList = productList.filter((p) => {
      return p.id !== id;
    });
    setProductList(newProductList);
  };
  let soma = 0;
  if (productList.length > 0) {
    productList.forEach((element) => {
      soma = soma + element.price * element.qty;
    });
  }
  return (
    <div>
      {productList.length > 0 && <h2>Lista de Pedidos</h2>}
      {productList &&
        productList.map((p) => {
          return (
            <Product
              key={p.id}
              product={p}
              productList={productList}
              setProductList={setProductList}
              removeProduct={removeProduct}
            />
          );
        })}
      {productList.length > 0 && <p>Total: R$ {soma.toFixed(2)}</p>}
    </div>
  );
}

export default ProductList;
