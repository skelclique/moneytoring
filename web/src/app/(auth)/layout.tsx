import Image from 'next/image'
import { ReactNode } from 'react'
import splashImg from '@/assets/splash.png'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'

export default async function AuthLayout({
  children,
}: {
  children: ReactNode
}) {
  const session = await auth()

  if (session) {
    redirect('/dashboard')
  }

  return (
    <div className="flex">
      {children}
      <div>
        <Image
          src={splashImg}
          quality={100}
          className="relative bottom-0 right-0 h-screen w-full max-w-1/2"
          alt=""
        />
      </div>
    </div>
  )
}
