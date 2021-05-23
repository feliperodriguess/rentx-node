import { Request, Response } from 'express'

import { ISpecificationsRepository } from '../../repositories/specifications/constants'

class ListSpecificationsController {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  handle(request: Request, response: Response): Response {
    const specifications = this.specificationsRepository.list()
    return response.json(specifications)
  }
}

export { ListSpecificationsController }
