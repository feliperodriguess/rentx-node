import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { ImportCategoryService } from '../../services/categories/import'

class ImportCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request
    const importCategoryService = container.resolve(ImportCategoryService)
    await importCategoryService.execute(file)
    return response.send()
  }
}

const importCategoryController = new ImportCategoryController()

export { ImportCategoryController, importCategoryController }
