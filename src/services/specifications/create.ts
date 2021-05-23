import { ISpecificationsRepository } from '../../repositories/specifications/constants'

interface IRequest {
  name: string
  description: string
}

class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({ name, description }: IRequest): void {
    const specificationExists = this.specificationsRepository.findByName(name)
    if (specificationExists) {
      throw new Error('This specification has already been added')
    }
    this.specificationsRepository.create({ name, description })
  }
}

export { CreateSpecificationService }
