import multer from 'multer'
import { Router } from 'express'

import {
  createCategoryController,
  importCategoryController,
  listCategoriesController
} from '../services/categories'

const categoriesRoutes = Router()
const upload = multer({
  dest: './tmp'
})

categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response)
})

categoriesRoutes.get('/', (request, response) => {
  return listCategoriesController.handle(request, response)
})

categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
  return importCategoryController.handle(request, response)
})

export { categoriesRoutes }
