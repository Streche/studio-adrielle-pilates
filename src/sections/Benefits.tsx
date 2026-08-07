import {
  Activity,
  Dumbbell,
  HeartPulse,
  Move,
  Sparkles,
  Stethoscope,
  type LucideIcon,
} from 'lucide-react'
import { Section } from '@/components/Section'
import { benefits, type BenefitIcon } from '@/data/studio'
import { useInView } from '@/hooks/useInView'

const icons: Record<BenefitIcon, LucideIcon> = {
  'heart-pulse': HeartPulse,
  dumbbell: Dumbbell,
  move: Move,
  stethoscope: Stethoscope,
  activity: Activity,
  sparkles: Sparkles,
}

function Benefits() {
  const { ref, isInView } = useInView<HTMLDivElement>()

  return (
    <Section
      id="beneficios"
      ariaLabelledBy="benefits-heading"
      className="bg-secondary/30"
    >
      <div ref={ref} className={isInView ? 'animate-fade-rise' : 'opacity-0'}>
        <h2
          id="benefits-heading"
          className="text-3xl text-foreground sm:text-4xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Benefícios
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = icons[benefit.icon]
            return (
              <div
                key={benefit.title}
                className="rounded-2xl border border-border p-6"
              >
                <Icon aria-hidden="true" className="size-8 text-foreground" />
                <h3 className="mt-4 text-lg text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

export { Benefits }
