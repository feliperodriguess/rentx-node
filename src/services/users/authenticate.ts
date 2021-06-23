require('dotenv').config()
import { inject, injectable } from 'tsyringe'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

import { AppError } from '../../errors/AppError'
import { UsersRepository } from '../../repositories/users'

interface IRequest {
  email: string
  password: string
}

interface IResponse {
  user: {
    id: string
    name: string
    email: string
  }
  token: string
}

@injectable()
class AuthenticateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: UsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email)
    if (!user) {
      throw new AppError('Email or password incorrect', 401)
    }
    const isPasswordMatch = await compare(password, user.password)
    if (!isPasswordMatch) {
      throw new AppError('Email or password incorrect', 401)
    }
    const token = sign({}, process.env.JWT_SECRET, {
      subject: user.id,
      expiresIn: '1d'
    })
    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      },
      token
    }
  }
}

export { AuthenticateUserService }
