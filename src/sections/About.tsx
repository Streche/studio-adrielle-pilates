import { Section } from '@/components/Section'
import { about, partnerships } from '@/data/studio'
import { useInView } from '@/hooks/useInView'

function About() {
  const { ref, isInView } = useInView<HTMLDivElement>()

  return (
    <Section id="sobre" ariaLabelledBy="about-heading">
      <div ref={ref} className={isInView ? 'animate-fade-rise' : 'opacity-0'}>
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-16">
          <div>
            <h2
              id="about-heading"
              className="font-display text-3xl text-foreground sm:text-4xl"
            >
              {about.heading}
            </h2>
            <div className="mt-6 max-w-3xl space-y-4 text-muted-foreground">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul className="mt-8 flex flex-wrap gap-3">
              {about.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="liquid-glass rounded-full px-4 py-1.5 text-sm text-foreground"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4 lg:w-64">
            {partnerships.map((partnership) => (
              <div
                key={partnership.name}
                className="liquid-glass rounded-2xl px-5 py-4"
              >
                <p className="text-foreground">{partnership.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {partnership.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export { About }
