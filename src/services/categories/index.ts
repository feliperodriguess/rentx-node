import {
  CreateCategoryController,
  ListCategoriesController
} from '../../controllers/categories'
import { CategoriesRepository } from '../../repositories/categories'
import { CreateCategoryService } from './create'

const categoriesRepository = new CategoriesRepository()
const createCategoryService = new CreateCategoryService(categoriesRepository)
const createCategoryController = new CreateCategoryController(
  createCategoryService
)
const listCategoriesController = new ListCategoriesController(
  categoriesRepository
)

export {
  createCategoryController,
  createCategoryService,
  listCategoriesController
}
