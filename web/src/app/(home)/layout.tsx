import { ReactNode } from 'react'
import { Sidebar } from './sidebar'

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      {children}
    </div>
  )
}
