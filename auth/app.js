const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const router = require('koa-router')();

const log = require('./src/log');
const api = require('./src/api');
const github = require('./src/lib/github');

const app = new Koa();
const port = 80;

app.use(logger());

app.use(bodyParser());

// log requests
app.use(async (ctx, next) => {
    await next();
    log.info(`${ctx.status} ${ctx.method} ${ctx.url}`);
});

app.on('error', (err, ctx) => {
    log.error('Server error');
    log.error(err);
});

router.get('/auth/callback/github', github.callback);
router.post('/auth/verify', github.verify);

app.use(router.routes());

app.listen(port);
log.info('Auth listening on port', port);
