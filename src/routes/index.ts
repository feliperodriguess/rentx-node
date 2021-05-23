import { Router } from 'express'

import { categoriesRoutes } from './categories'
import { specificationsRoutes } from './specifications'

const routes = Router()

routes.use('/categories', categoriesRoutes)
routes.use('/specifications', specificationsRoutes)

export { routes }
