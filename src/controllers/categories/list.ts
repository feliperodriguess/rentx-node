import { Request, Response } from 'express'

import { ICategoriesRepository } from '../../repositories/categories/constants'

class ListCategoriesController {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  handle(request: Request, response: Response): Response {
    const categories = this.categoriesRepository.list()
    return response.json(categories)
  }
}

export { ListCategoriesController }
