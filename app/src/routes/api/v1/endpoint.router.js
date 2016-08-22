const Router = require('koa-router');
const Endpoint = require('models/endpoint.model');
const logger = require('logger');
const Utils = require('utils');

const router = new Router({
    prefix: '/endpoint',
});

class EndpointRouter {

    static async get(ctx) {
        logger.info('Obtaining endpoints');
        ctx.body = await Endpoint.find({}, { __v: 0 });
    }

}

router.get('/', Utils.isLogged, Utils.isAdmin, EndpointRouter.get);

module.exports = router;
