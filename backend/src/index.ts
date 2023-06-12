import app from "./app";
import { addClient } from "./endpoints/addClient";
import { addNewOrder } from "./endpoints/addNewOrder";
import { invetory } from "./endpoints/inventory";
import { listAllClients } from "./endpoints/listAllClients";
import { listAllProducts } from "./endpoints/listAllProducts";

app.post('/client/add', addClient);
app.post('/order/add/new', addNewOrder);
app.get('/client/list', listAllClients);
app.get('/products/list', listAllProducts);
app.get("/inventory", invetory);
