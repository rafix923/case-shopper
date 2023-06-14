import React from "react";

function Form() {
  return (
    <form>
      <div>
        <label htmlFor="client">Nome:</label>
        <input id="client" list="dataList"></input>
        <datalist id="dataList">
          <option>Rafael Lopes</option>
          <option>Rodolpho Lopes</option>
          <option>Ane Lopes</option>
        </datalist>
        <button>Confirmar</button>
      </div>
      <hr />
      <div>
        <label htmlFor="product">Produto:</label>
        <input id="product" list="productData"></input>
        <datalist id="productData">
          <option>Mamão</option>
          <option>Abacaxi</option>
          <option>Banana</option>
        </datalist>
        <label>Quantidade</label>
        <input id="qty" type="number"></input>
        <p>Valor Total: R$20,00</p>
        <button>Confirmar</button>
      </div>
      <hr />
      <div>
        <label htmlFor="deliveryDate">Data de entrega: (DD/MM/AAAA)</label>
        <input id="deliveryDate"></input>
        <button>Confirmar Pedido</button>
      </div>
    </form>
  );
}

export default Form;
