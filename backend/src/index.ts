import app from "./app";
import { addClient } from "./endpoints/addClient";
import { addNewOrder } from "./endpoints/addNewOrder";
import { listAllClients } from "./endpoints/listAllClients";
import { listAllProducts } from "./endpoints/listAllProducts";

app.post('/client/add', addClient);
app.get('/client/list', listAllClients);
app.get('/products/list', listAllProducts);
app.post('/order/add/new', addNewOrder);
