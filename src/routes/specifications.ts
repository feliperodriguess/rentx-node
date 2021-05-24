import { Router } from 'express'

import {
  createSpecificationController,
  listSpecificationsController
} from '../controllers/specifications'

const specificationsRoutes = Router()

specificationsRoutes.post('/', createSpecificationController.handle)
specificationsRoutes.get('/', listSpecificationsController.handle)

export { specificationsRoutes }
