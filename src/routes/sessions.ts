import { Router } from 'express'

import { authenticateUserController } from '../controllers/users'

const sessionsRoutes = Router()

sessionsRoutes.post('/', authenticateUserController.handle)

export { sessionsRoutes }
