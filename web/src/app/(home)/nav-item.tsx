'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface NavItemProps {
  path: string
  title: string
  icon?: ReactNode
}

export function NavItem({ path, title, icon }: NavItemProps) {
  const pathname = usePathname()

  return (
    <Link
      href={path}
      className={clsx('py-3 px-4 flex items-center gap-3 text-sm rounded-lg', {
        'font-medium text-gray-200': pathname !== path,
        'font-semibold text-gray-700 bg-lime-600': pathname === path,
      })}
    >
      {icon}
      {title}
    </Link>
  )
}
