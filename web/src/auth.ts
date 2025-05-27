import { PrismaAdapter } from '@auth/prisma-adapter'
import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'
import { prisma } from './prisma'
import { findUserByCredentials } from './lib/user'

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google,
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const user = await findUserByCredentials(
          credentials.email as string,
          credentials.password as string,
        )

        return user
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
})
