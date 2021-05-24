import { container } from 'tsyringe'

import { CategoriesRepository } from '../../repositories/categories'
import { ICategoriesRepository } from '../../repositories/categories/constants'
import { SpecificationsRepository } from '../../repositories/specifications'
import { ISpecificationsRepository } from '../../repositories/specifications/constants'

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository
)

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationsRepository
)
