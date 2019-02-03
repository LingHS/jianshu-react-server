import Koa = require('koa');
import Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/*', async (ctx: any) => {
    ctx.body = 'Hello World!';
});

app.use(router.routes());

app.listen(3000, () => console.log('Server running on port 3000'));
