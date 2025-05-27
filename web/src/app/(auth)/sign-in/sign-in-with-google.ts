'use server'

import { signIn } from '@/auth'

export async function signInWithGoogle(formData: FormData) {
  return await signIn('google', {
    redirect: true,
    redirectTo: '/dashboard',
  })
}
