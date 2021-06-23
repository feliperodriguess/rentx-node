import { Router } from 'express'

import { categoriesRoutes } from './categories'
import { sessionsRoutes } from './sessions'
import { specificationsRoutes } from './specifications'
import { usersRoutes } from './users'
import { authMiddleware } from '../middlewares/auth'

const routes = Router()

routes.use('/users', usersRoutes)
routes.use('/sessions', sessionsRoutes)
routes.use(authMiddleware)
routes.use('/categories', categoriesRoutes)
routes.use('/specifications', specificationsRoutes)

export { routes }
