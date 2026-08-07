import { Section } from '@/components/Section'
import { modalities } from '@/data/studio'
import { useInView } from '@/hooks/useInView'

function Modalities() {
  const { ref, isInView } = useInView<HTMLDivElement>()

  return (
    <Section id="modalidades" ariaLabelledBy="modalities-heading">
      <div ref={ref} className={isInView ? 'animate-fade-rise' : 'opacity-0'}>
        <h2
          id="modalities-heading"
          className="text-3xl text-foreground sm:text-4xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Modalidades
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modalities.map((modality) => (
            <div key={modality.title} className="liquid-glass rounded-2xl p-6">
              <h3
                className="text-xl text-foreground"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {modality.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {modality.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export { Modalities }
