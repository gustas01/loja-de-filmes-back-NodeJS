import { Router } from'express'
import genresController from '../controllers/GenresController'

const router = new Router()

router.get('/', genresController.index)
router.get('/:id', genresController.getGenreById)

export default router
