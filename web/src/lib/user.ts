import { prisma } from '@/prisma'
import { compareSync } from 'bcryptjs'

interface User {
  email: string
  password: string
}

export async function findUserByCredentials(
  email: string,
  password: string,
): Promise<User | null> {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (!user || !user.password) {
    return null
  }

  const match = compareSync(password, user.password)

  if (!match) {
    return null
  }

  return null
}
