import { Request, Response } from 'express'

import { ImportCategoryService } from '../../services/categories/import'

class ImportCategoryController {
  constructor(private importCategoryService: ImportCategoryService) {}

  handle(request: Request, response: Response): Response {
    const { file } = request
    this.importCategoryService.execute(file)
    return response.send()
  }
}

export { ImportCategoryController }
