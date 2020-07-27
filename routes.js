const resourses = require('./resourses');
const Router = require('koa-router');

const router = new Router();

router.get('/', (ctx, next) => {
  ctx.body = "works"
});

router.get('/me', resourses.getUser);
router.post('/me', resourses.createUser);
router.get('/logs', resourses.getLogs);
router.post('/logs', resourses.createLogs);

module.exports = router.routes()
