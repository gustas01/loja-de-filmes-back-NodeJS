import { Router } from'express'
import shoppingCartController from '../controllers/ShoppingCartController.js'

const router = new Router()

router.post('/', shoppingCartController.create)
router.get('/:id', shoppingCartController.read)
router.put('/', shoppingCartController.update)

export default router
