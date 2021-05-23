import { ICategoriesRepository } from '../../repositories/categories/constants'

interface IRequest {
  name: string
  description: string
}

class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryExists = this.categoriesRepository.findByName(name)
    if (categoryExists) {
      throw new Error('This category has already been added')
    }
    this.categoriesRepository.create({ name, description })
  }
}

export { CreateCategoryService }
