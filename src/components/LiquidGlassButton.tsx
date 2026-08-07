import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

type LiquidGlassButtonProps = ComponentProps<'a'>

function LiquidGlassButton({
  className,
  children,
  ...props
}: LiquidGlassButtonProps) {
  return (
    <a
      className={cn(
        'liquid-glass inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm text-foreground transition-transform hover:scale-[1.03]',
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}

export { LiquidGlassButton }
