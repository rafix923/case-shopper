import React from "react";

function Product({
  product,
  products,
  setProducts,
  productList,
  setProductList,
  removeProduct,
}) {
  const qtyUpdated = (event) => {
    const currentQty = event.target.value;
    const productUpdated = productList.map((p) => {
      if (p.id === product.id) {
        p.qty = currentQty;
      }
      return p;
    });
    setProducts(productUpdated);
  };

  if (!product) {
    return null;
  }

  return (
    <div>
      <p>{product.name}</p>
      <input
        id="qty"
        type="number"
        name="qty"
        min="0"
        value={product.qty}
        onChange={qtyUpdated}
      />
      <p>{parseFloat(product.price * product.qty).toFixed(2)}</p>
      <button
        type="button"
        onClick={() => {
          removeProduct(product.id);
        }}
      >
        Excluir pedido
      </button>
    </div>
  );
}

export default Product;
