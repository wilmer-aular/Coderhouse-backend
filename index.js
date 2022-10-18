import express from 'express';
import { Server as HTTPServer } from 'http';
import { Server as SocketServer } from 'socket.io';
// import Product from './src/services/product.service.js';
// const product = new Product();
//import Container from './src/services/container.service.js';
//const message = new Container('messages.txt');
import Message from './src/services/knex/message.service.js';
const message = new Message('messages');
import Product from './src/services/knex/product.service.js';
const product = new Product('products');

import handlebars from 'express-handlebars';

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const httpServer = new HTTPServer(app);
const io = new SocketServer(httpServer);

app.disable('x-powered-by')
import routerFacade from "./src/routers/fecade.js";

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.engine("hbs", handlebars.engine({
  extname: "hbs",
  layoutsDir: __dirname + "/views/hbs",
  defaultLayout: "index.hbs"
}))

app.set("view engine", "ejs");
app.set("view engine", "pug");
app.set("view engine", "hbs");

app.use(express.static("views"));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use("", routerFacade);

io.on('connection', async socket => {
  console.log(`Connect: ${socket.id}`);
  socket.emit('products', await product.getAll());
  socket.emit('messages', await message.getAll());

  socket.on('newProducts', async data => {
    await product.create(data);
    io.sockets.emit('products', await product.getAll())
  })
  socket.on('newMessages', async data => {
    await message.create(data);
    io.sockets.emit('messages', await message.getAll())
  })

})

httpServer.listen(8080, () => {
  console.info("El servidor está inicializado en el puerto 8080");
});
