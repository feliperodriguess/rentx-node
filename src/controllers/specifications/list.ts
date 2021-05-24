import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { ListSpecificationsService } from '../../services/specifications/list'

class ListSpecificationsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listSpecificationsService = container.resolve(
      ListSpecificationsService
    )
    const specifications = await listSpecificationsService.execute()
    return response.json(specifications)
  }
}

const listSpecificationsController = new ListSpecificationsController()

export { ListSpecificationsController, listSpecificationsController }
