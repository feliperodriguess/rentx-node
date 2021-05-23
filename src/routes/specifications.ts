import { Router } from 'express'

import { SpecificationsRepository } from '../repositories/specifications'
import { CreateSpecificationService } from '../services/specifications/create'

const specificationsRoutes = Router()
const specificationsRepository = new SpecificationsRepository()

specificationsRoutes.post('/', (request, response) => {
  const { name, description } = request.body
  const createSpecificationService = new CreateSpecificationService(
    specificationsRepository
  )
  createSpecificationService.execute({ name, description })
  return response.status(201).send()
})

specificationsRoutes.get('/', (request, response) => {
  const specifications = specificationsRepository.list()
  return response.json(specifications)
})

export { specificationsRoutes }
