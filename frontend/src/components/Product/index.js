import React from "react";

function Product({
  product,
  products,
  setProducts,
  productList,
  setProductList,
}) {
  const qtyUpdated = (event) => {
    const currentQty = event.target.value;
    const productUpdated = productList.map((p) => {
      if (p.id === product.id) {
        p.qty = product.qty;
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
      <p>R$ 8,00</p>
      <button>Excluir pedido</button>
    </div>
  );
}

export default Product;
