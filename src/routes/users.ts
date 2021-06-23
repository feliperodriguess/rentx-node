import { Router } from 'express'

import { createUserController } from '../controllers/users'

const usersRoutes = Router()

usersRoutes.post('/', createUserController.handle)

export { usersRoutes }
