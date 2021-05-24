import { inject, injectable } from 'tsyringe'

import { Specification } from '../../models/Specification'
import { ISpecificationsRepository } from '../../repositories/specifications/constants'

@injectable()
class ListSpecificationsService {
  constructor(
    @inject('SpecificationsRepository')
    private SpecificationsRepository: ISpecificationsRepository
  ) {}

  async execute(): Promise<Specification[]> {
    const specifications = await this.SpecificationsRepository.list()
    return specifications
  }
}

export { ListSpecificationsService }
