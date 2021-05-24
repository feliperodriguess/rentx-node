import multer from 'multer'
import { Router } from 'express'

import {
  createCategoryController,
  importCategoryController,
  listCategoriesController
} from '../controllers/categories'

const categoriesRoutes = Router()
const upload = multer({
  dest: './tmp'
})

categoriesRoutes.post('/', createCategoryController.handle)
categoriesRoutes.get('/', listCategoriesController.handle)
categoriesRoutes.post(
  '/import',
  upload.single('file'),
  importCategoryController.handle
)

export { categoriesRoutes }
