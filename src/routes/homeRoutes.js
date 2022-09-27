import { Router } from'express'
import HomeAPI from '../controllers/HomeAPI.js'

const router = new Router()

router.get('/:page', HomeAPI.index)
router.get('/:movieNameSearch/:pageFromSearchedMovie', HomeAPI.read)

export default router
