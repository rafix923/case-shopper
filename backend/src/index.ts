import app from "./app";
import { addClient } from "./endpoints/addClient";

app.post('/client/add', addClient);