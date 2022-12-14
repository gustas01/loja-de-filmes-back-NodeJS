import { Router } from'express'
import SearchMovieController from '../controllers/SearchMovieController'

const router = new Router()

router.get('/:movieId', SearchMovieController.searchMovieById)
router.get('/:movieNameSearch/:pageFromSearchedMovie', SearchMovieController.searchMovieByName)

export default router
