const router = require('koa-router')();
import user_router from './user_router'

router.use('/users', user_router.routes(),user_router.allowedMethods());
router.use('/', async () => {
    await console.log(1)  
});

module.exports = router;
