import { ReactNode } from 'react'
import { Sidebar } from './sidebar'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import { HomeHeaderLayout } from './header'

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
      <div className="flex-1 py-8 px-10">
        <HomeHeaderLayout session={session} />
        {children}
      </div>
    </div>
  )
}
