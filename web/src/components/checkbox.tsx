import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'
import { ControllerRenderProps } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

interface CheckboxProps
  extends Partial<ControllerRenderProps>,
    Omit<
      CheckboxPrimitive.CheckboxProps,
      'name' | 'onBlur' | 'onChange' | 'value'
    > {}

export function Checkbox(props: CheckboxProps) {
  const { className, ...rest } = props

  return (
    <CheckboxPrimitive.Root
      className={twMerge(
        "flex h-4 w-4 items-center justify-center rounded-[4px] border border-gray-200 bg-transparent text-white transition-colors data-[state='checked']:border-lime-600 data-[state='checked']:bg-lime-600 disabled:cursor-not-allowed dark:border-gray-725",
        className,
      )}
      {...rest}
    >
      <CheckboxPrimitive.Indicator>
        <Check className="h-3 w-3" strokeWidth={3} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}
