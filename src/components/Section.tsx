import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  id: string
  ariaLabelledBy: string
  className?: string
  children: ReactNode
}

function Section({ id, ariaLabelledBy, className, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn('px-6 py-20 sm:px-8', className)}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  )
}

export { Section }
