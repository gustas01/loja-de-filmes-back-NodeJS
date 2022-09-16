import { Router } from'express'
import userController from '../controllers/UserController'
import loginRequired from '../middlewares/loginRequired'

const router = new Router()

router.get('/', userController.index)

router.post('/', userController.create)
router.get('/:id?', userController.read)
router.put('/', loginRequired, userController.update)
router.delete('/:id?', loginRequired, userController.delete)

export default router
