import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateSpecificationService } from '../../services/specifications/create'

class CreateSpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body
    const createSpecificationService = container.resolve(
      CreateSpecificationService
    )
    await createSpecificationService.execute({ name, description })
    return response.status(201).send()
  }
}

const createSpecificationController = new CreateSpecificationController()

export { CreateSpecificationController, createSpecificationController }
