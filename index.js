const Koa = require('koa');
var bodyParser = require('koa-bodyparser');
const app = new Koa();
const router = require('./routes');

app.use(bodyParser())
app.use(router);
app.listen(8080)