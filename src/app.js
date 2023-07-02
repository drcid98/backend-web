const Koa = require("koa");
const KoaLogger = require("koa-logger");
const cors = require("@koa/cors");
const { koaBody } = require("koa-body");
const router = require("./routes.js");
const orm = require("./models");

const app = new Koa();

app.context.orm = orm;

app.use(cors());

app.use(KoaLogger());
app.use(koaBody());

app.use(router.routes());


app.use((ctx) => {
  ctx.body = "Hola Mundo! Saludos desde IIC2513";
});
  
module.exports = app;