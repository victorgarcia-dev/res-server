import 'dotenv/config' //configura y establece las variables de entorno

import { Server } from "./models/server.model.js";

const server = new Server();
server.listen();





