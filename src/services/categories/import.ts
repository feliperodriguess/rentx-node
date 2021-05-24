import fs from 'fs'
import csvParse from 'csv-parse'
import { inject, injectable } from 'tsyringe'

import { ICategoriesRepository } from '../../repositories/categories/constants'

interface IImportCategory {
  name: string
  description: string
}

@injectable()
class ImportCategoryService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository
  ) {}

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path)
      const categories: IImportCategory[] = []
      const parseFile = csvParse({ skipLinesWithError: true })
      stream.pipe(parseFile)
      parseFile
        .on('data', async (line) => {
          const [name, description] = line
          categories.push({ name, description })
        })
        .on('end', () => resolve(categories))
        .on('error', (error) => reject(error))
    })
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file)
    categories.map((category) => {
      const { name, description } = category
      const categoryExists = this.categoriesRepository.findByName(name)
      if (!categoryExists) {
        this.categoriesRepository.create({ name, description })
      }
    })
  }
}

export { ImportCategoryService }
