import Router = require('koa-router');
import Serv = require('../service');
import Proxy = require('../proxy')
const router = new Router();



// router.all('*', Serv.nF);
router.get('/api/banner-img/*', Proxy('cdn2.jianshu.io', {
    https: true,
    preserveHostHdr: true,
    proxyReqPathResolver: function (ctx) {
        return require('url').parse(ctx.url).path.replace("api/banner-img", "assets/web");
    },
    proxyReqOptDecorator: function (proxyReqOpts, ctx) {
        // you can update headers
        proxyReqOpts.headers['referer'] = 'https://www.jianshu.com/';
        // you could change the path
        // proxyReqOpts.path = '/assets/web/'
        // console.log(proxyReqOpts)
        return proxyReqOpts;
    }
}));
router.get('/api/trending_search', Proxy('www.jianshu.com', {
    https: true,
    preserveHostHdr: true,
    proxyReqPathResolver: function (ctx) {
        return require('url').parse(ctx.url).path.replace("api/trending_search", "trending_search");
    },
    proxyReqOptDecorator: function (proxyReqOpts, ctx) {
        // you can update headers
        proxyReqOpts.headers['referer'] = 'https://www.jianshu.com/';
        // you could change the path
        proxyReqOpts.headers['accept'] = 'application/json';
        // proxyReqOpts.path = '/assets/web/'
        return proxyReqOpts;
    }
}));
router.get('/api/writer', Proxy('www.jianshu.com', {
    https: true,
    preserveHostHdr: true,
    proxyReqPathResolver: function (ctx) {
        return require('url').parse(ctx.url).path.replace("api/writer", "users/recommended");
    },
    proxyReqOptDecorator: function (proxyReqOpts, ctx) {
        // you can update headers
        proxyReqOpts.headers['referer'] = 'https://www.jianshu.com/';
        // you could change the path
        proxyReqOpts.headers['accept'] = 'application/json';
        // proxyReqOpts.path = '/assets/web/'
        return proxyReqOpts;
    }
}));

router.get('/', Serv.index);
router.get('/test', Serv.test);

export = router

