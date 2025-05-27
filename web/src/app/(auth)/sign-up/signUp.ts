'use server'

import { prisma } from '@/prisma'
import { hashSync } from 'bcryptjs'
import { z } from 'zod'

const signUpSchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .min(1, 'Name is required'),
  email: z
    .string({ required_error: 'Email is required' })
    .min(1, 'Email is required')
    .email('Invalid email'),
  password: z
    .string({ required_error: 'Password is required' })
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
})

export default async function signUp(formData: FormData) {
  const { name, email, password } = await signUpSchema.parseAsync(
    Object.fromEntries(Array.from(formData.entries())),
  )

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (user) {
    throw new Error('Already exists an users with this email address.')
  }

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashSync(password),
    },
  })
}
