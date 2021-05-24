import { inject, injectable } from 'tsyringe'

import { Category } from '../../models/Category'
import { ICategoriesRepository } from '../../repositories/categories/constants'

@injectable()
class ListCategoriesService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.list()
    return categories
  }
}

export { ListCategoriesService }
