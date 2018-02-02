const router = require('koa-router')();
import {getUser} from '../../controllers/user_controller'

router.get('/getUser', getUser);

export default router
