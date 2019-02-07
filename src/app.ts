import path = require('path')
import Koa = require('koa');
import logger = require('koa-logger')
import KoaStaticCache = require('koa-static-cache')
import router = require('./router')

const app = new Koa();
// app.proxy = true;
// app.use(logger((str:string, args:any) => {
//     // redirect koa logger to other output pipe
//     // default is process.stdout(by console.log function)
//     console.log(str)
// }))
app.use(KoaStaticCache(path.resolve(__dirname, '..') + '/view', {
    prefix: '/',
    maxAge: 60 * 1000,
    gzip: true,//默认为true
}))
app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3000,'127.0.0.1', () => console.log('Server running on port 3000'));

