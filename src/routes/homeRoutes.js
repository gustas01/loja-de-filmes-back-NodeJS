import { Router } from'express'
import homeController from '../controllers/HomeController.js'

const router = new Router()

router.get('/:page', homeController.index)
router.get('/:movieNameSearch/:pageFromSearchedMovie', homeController.read)

export default router
