import { ReactNode } from 'react'
import { Sidebar } from './sidebar'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'

export default async function HomeLayout({
  children,
}: {
  children: ReactNode
}) {
  const session = await auth()

  if (!session) {
    redirect('/sign-in')
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      {children}
    </div>
  )
}
