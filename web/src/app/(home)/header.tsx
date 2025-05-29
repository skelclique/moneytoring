'use client'

import { Dropdown } from '@/assets/dropdown'
import { Notifications } from '@/assets/notifications'
import { Search } from '@/assets/search'
import { User } from 'lucide-react'
import { Session } from 'next-auth'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

interface HomeHeaderLayoutProps {
  session: Session
}

export function HomeHeaderLayout({ session }: HomeHeaderLayoutProps) {
  const pathname = usePathname()

  const pathnameWithoutSlash = pathname.replace('/', '')

  const title =
    pathnameWithoutSlash.charAt(0).toUpperCase() +
    pathnameWithoutSlash.slice(1, pathnameWithoutSlash.length)

  return (
    <header className="flex">
      <h1 className="font-semibold text-2xl text-gray-700 dark:text-white">
        {title}
      </h1>
      <div className="ml-auto flex gap-10">
        <button className="stroke-gray-200">
          <Search />
        </button>
        <button>
          <Notifications />
        </button>
        <div className="bg-gray-125 py-1.5 px-2.5 rounded-full flex gap-3 items-center dark:bg-gray-600">
          {session?.user?.image ? (
            <Image
              src={session?.user?.image ?? ''}
              alt=""
              width={32}
              height={32}
              className="rounded-full"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-gray-400 dark:bg-gray-450 flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
          )}
          <span className="font-semibold text-sm text-gray-700 dark:text-white">
            {session?.user?.name}
          </span>
          <button className="cursor-pointer dark:fill-white ml-3">
            <Dropdown />
          </button>
        </div>
      </div>
    </header>
  )
}
