import React from "react";
import Product from "../Product";

function ProductList({ productList }) {
  return (
    <div>
      {productList &&
        productList.map((p) => {
          <Product />;
        })}
    </div>
  );
}

export default ProductList;
