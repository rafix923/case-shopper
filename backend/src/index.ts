import app from "./app";
import { addClient } from "./endpoints/addClient";
import { listAllClients } from "./endpoints/listAllClients";

app.post('/client/add', addClient);
app.get('/client/list', listAllClients);