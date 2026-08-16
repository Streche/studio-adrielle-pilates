import { Section } from '@/components/Section'
import { about, partnerships } from '@/data/studio'
import { useInView } from '@/hooks/useInView'

function About() {
  const { ref, isInView } = useInView<HTMLDivElement>()

  return (
    <Section id="sobre" ariaLabelledBy="about-heading">
      <div ref={ref} className={isInView ? 'animate-fade-rise' : 'opacity-0'}>
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
        <ul className="mt-8 flex flex-wrap items-stretch gap-3">
          {about.highlights.map((highlight) => (
            <li
              key={highlight}
              className="liquid-glass flex items-center rounded-full px-4 py-1.5 text-sm text-foreground"
            >
              {highlight}
            </li>
          ))}
          {partnerships.map((partnership) => (
            <li
              key={partnership.name}
              className="liquid-glass rounded-2xl px-4 py-2"
            >
              <p className="text-sm text-foreground">{partnership.name}</p>
              <p className="text-xs text-muted-foreground">
                {partnership.detail}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

export { About }
