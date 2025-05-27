'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface NavItemProps {
  path?: string
  title: string
  icon?: ReactNode
}

export function NavItem({ path, title, icon }: NavItemProps) {
  const pathname = usePathname()

  if (!path) {
    return (
      <button className="transition-colors w-full py-3 px-4 flex items-center gap-3 text-sm rounded-lg font-medium text-gray-200 fill-gray-200 hover:font-semibold hover:text-gray-700 hover:fill-gray-700 hover:bg-lime-600">
        {icon}
        {title}
      </button>
    )
  }

  return (
    <Link
      href={path}
      className={clsx(
        'transition-colors py-3 px-4 flex items-center gap-3 text-sm rounded-lg hover:font-semibold hover:text-gray-700 hover:fill-gray-700 hover:bg-lime-600',
        {
          'font-medium text-gray-200 fill-gray-200': pathname !== path,
          'font-semibold text-gray-700 fill-gray-700 bg-lime-600':
            pathname === path,
        },
      )}
    >
      {icon}
      {title}
    </Link>
  )
}
