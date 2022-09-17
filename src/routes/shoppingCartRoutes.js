import { Router } from'express'
import shoppingCartController from '../controllers/ShoppingCartController.js'
import loginRequired from '../middlewares/loginRequired'

const router = new Router()

router.post('/', shoppingCartController.create)
router.get('/', loginRequired, shoppingCartController.read)
router.put('/', loginRequired, shoppingCartController.update)
router.delete('/', loginRequired, shoppingCartController.delete)

export default router
