import { CreateSpecificationService } from './create'
import {
  CreateSpecificationController,
  ListSpecificationsController
} from '../../controllers/specifications'
import { SpecificationsRepository } from '../../repositories/specifications'

const specificationsRepository = new SpecificationsRepository()
const createSpecificationService = new CreateSpecificationService(
  specificationsRepository
)
const createSpecificationController = new CreateSpecificationController(
  createSpecificationService
)
const listSpecificationsController = new ListSpecificationsController(
  specificationsRepository
)

export {
  createSpecificationController,
  createSpecificationService,
  listSpecificationsController
}
