import { Router } from'express'
import favoritesController from '../controllers/FavoritesController.js'
import loginRequired from '../middlewares/loginRequired'

const router = new Router()

// router.post('/', favoritesController.create)
// router.post('/', loginRequired, favoritesController.create)

router.get('/', loginRequired, favoritesController.read)
router.put('/', loginRequired, favoritesController.update)
router.delete('/', loginRequired, favoritesController.delete)

export default router
