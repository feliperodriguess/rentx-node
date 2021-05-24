import { inject, injectable } from 'tsyringe'

import { ICategoriesRepository } from '../../repositories/categories/constants'

interface IRequest {
  name: string
  description: string
}

@injectable()
class CreateCategoryService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryExists = await this.categoriesRepository.findByName(name)
    if (categoryExists) {
      throw new Error('This category has already been added')
    }
    this.categoriesRepository.create({ name, description })
  }
}

export { CreateCategoryService }
