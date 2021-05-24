import { inject, injectable } from 'tsyringe'
import { ISpecificationsRepository } from '../../repositories/specifications/constants'

interface IRequest {
  name: string
  description: string
}

@injectable()
class CreateSpecificationService {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecificationsRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const specificationExists = await this.specificationsRepository.findByName(
      name
    )
    if (specificationExists) {
      throw new Error('This specification has already been added')
    }
    this.specificationsRepository.create({ name, description })
  }
}

export { CreateSpecificationService }
