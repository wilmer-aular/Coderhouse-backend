const express = require("express");
const bodyParser = require("body-parser");
const handlebars = require('express-handlebars');

var path = require("path");
global.appRoot = path.resolve(__dirname);

const app = express();
app.disable('x-powered-by')
const routerFacade = require("./src/routers/fecade.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine("hbs", handlebars.engine({
  extname: "hbs",
  layoutsDir: __dirname + "/views/hbs",
  defaultLayout: "index.hbs"
}))

app.set("view engine", "ejs");
app.set("view engine", "pug");
app.set("view engine", "hbs");

app.use(express.static("public"));

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

app.listen(8080, () => {
  console.info("El servidor está inicializado en el puerto 8080");
});
