import fs = require('fs')
import path = require('path')
// import fsPromises =require('fs').promises
interface Struct {
    (ctx: any, next: any): void
}

let index: Struct = async (ctx: any, next: any) => {
    ctx.set('Content-Type', 'text/html; charset=utf-8')
    ctx.body = fs.readFileSync(path.join(path.resolve(__dirname, '../../'), 'view/index.html'));
    await next()
}
let nF: Struct = async (ctx: any, next: any) => {
    // ctx.status = 404;
    // ctx.set('Content-Type', 'text/html; charset=utf-8')
    // ctx.body = `<h1>404 页面不存在</h1>`
    ctx.set('Content-Type', 'text/html; charset=utf-8')
    ctx.body = fs.readFileSync(path.join(path.resolve(__dirname, '../../'), 'view/index.html'));
    await next()
}
let test: Struct = async (ctx: any, next: any) => {
    ctx.body = `test web`
    await next()
}

export = { index, nF, test }