import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

import { AppError } from '../errors/AppError'
import { UsersRepository } from '../repositories/users'

interface IPayload {
  sub: string
}

export const authMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const authHeader = request.headers.authorization
  if (!authHeader) {
    throw new AppError('Token not provided', 401)
  }
  const [, token] = authHeader.split(' ')

  try {
    const { sub: userId } = verify(token, process.env.JWT_SECRET) as IPayload
    const usersRepository = new UsersRepository()
    const user = await usersRepository.findById(userId)
    if (!user) {
      throw new AppError('User does not exist', 401)
    }
    next()
  } catch {
    throw new AppError('Token invalid', 401)
  }
}
