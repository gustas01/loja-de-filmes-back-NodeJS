import { Router } from'express'
import HomeAPI from '../controllers/HomeAPI.js'

const router = new Router()

router.get('/:page', HomeAPI.index)

export default router
