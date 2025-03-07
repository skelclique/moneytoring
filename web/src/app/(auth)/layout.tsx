import Image from 'next/image'
import { ReactNode } from 'react'
import splashImg from '@/assets/splash.png'

export default function AuthLayout({ children }: { children: ReactNode }) {
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
