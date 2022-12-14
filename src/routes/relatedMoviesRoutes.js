import { Router } from'express'
import HomeAPI from '../controllers/HomeAPI.js'

const router = new Router()

router.get('/:movieId', HomeAPI.relatedMovies)

export default router
