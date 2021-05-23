import {
  CreateCategoryController,
  ListCategoriesController,
  ImportCategoryController
} from '../../controllers/categories'
import { CategoriesRepository } from '../../repositories/categories'
import { CreateCategoryService } from './create'
import { ImportCategoryService } from './import'

const categoriesRepository = new CategoriesRepository()
const createCategoryService = new CreateCategoryService(categoriesRepository)
const createCategoryController = new CreateCategoryController(
  createCategoryService
)

const listCategoriesController = new ListCategoriesController(
  categoriesRepository
)

const importCategoryService = new ImportCategoryService(categoriesRepository)
const importCategoryController = new ImportCategoryController(
  importCategoryService
)

export {
  createCategoryController,
  createCategoryService,
  listCategoriesController,
  importCategoryController
}
