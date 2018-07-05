const Koa = require('koa');
const compress = require('koa-compress');
const next = require('next');

const Router = require('koa-router');
const routes = require('./routes');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_DEV !== 'production';
const app = next({ dev, quiet: true });
const handle = routes.getRequestHandler(app);

app.prepare()
    .then(() => {
        const server = new Koa();
        const router = new Router();

        server.use(compress({
            filter: (content_type) => {
                return /text/i.test(content_type);
            },
            threshold: 2048,
            flush: require('zlib').Z_SYNC_FLUSH
        }));

        router.get('*', async ctx => {
            await handle(ctx.req, ctx.res);
            ctx.response = false;
        });

        server.use(async (ctx, next) => {
            ctx.res.statusCode = 200;
            await next();
        });

        server.use(router.routes());
        server.listen(port, err => {
            if(err) throw err;
            console.log(`> Ready on http://localhost:${port}`);
        });
    });
