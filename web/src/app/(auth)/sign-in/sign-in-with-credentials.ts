/* eslint-disable @typescript-eslint/no-explicit-any */
'use server'

import { signIn } from '@/auth'

export async function signInWithCredentials(
  _prevState: any,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData)
    return { success: true }
  } catch (error: any) {
    console.log({
      error: error.type,
    })
    if (error.type === 'CredentialsSignin') {
      return {
        success: false,
        error: 'Dados de login incorretos.',
      }
    }
    return {
      success: false,
      error: 'Ops, algum erro aconteceu!',
    }
  }
}
