const express = require("express");
const bodyParser = require("body-parser");

var path = require("path");
global.appRoot = path.resolve(__dirname);


const app = express();
app.disable('x-powered-by')
const routerApi = require("./src/routers/fecade.js");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


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

app.use("", routerApi);

app.listen(8080, () => {
  console.info("El servidor está inicializado en el puerto 8080");
});
