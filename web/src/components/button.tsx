import clsx from 'clsx'
import { ComponentProps } from 'react'

interface ButtonProps extends ComponentProps<'button'> {}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'flex items-center justify-center gap-2.5 bg-lime-600 text-gray-700 rounded-md font-semibold text-sm px-5 py-2.5',
        rest.className,
      )}
    >
      {children}
    </button>
  )
}
