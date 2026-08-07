import { Clock, MapPin } from 'lucide-react'
import { Section } from '@/components/Section'
import { ExternalLink } from '@/components/ExternalLink'
import { LiquidGlassButton } from '@/components/LiquidGlassButton'
import { heroContent, studio } from '@/data/studio'
import { useInView } from '@/hooks/useInView'

function Location() {
  const { ref, isInView } = useInView<HTMLDivElement>()

  return (
    <Section id="contato" ariaLabelledBy="location-heading">
      <div ref={ref} className={isInView ? 'animate-fade-rise' : 'opacity-0'}>
        <h2
          id="location-heading"
          className="font-display text-3xl text-foreground sm:text-4xl"
        >
          Venha treinar com a gente
        </h2>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <div className="flex gap-3">
            <MapPin
              aria-hidden="true"
              className="mt-1 size-5 shrink-0 text-foreground"
            />
            <div>
              <p className="text-foreground">{studio.addressLine}</p>
              <p className="text-muted-foreground">
                {studio.neighborhood}, {studio.city} - {studio.state}
                {studio.postalCode ? `, ${studio.postalCode}` : ''}
              </p>
              <ExternalLink
                href={studio.mapsSearchUrl}
                className="mt-2 inline-block text-sm text-foreground underline underline-offset-4"
              >
                Ver no mapa
              </ExternalLink>
            </div>
          </div>

          <div className="flex gap-3">
            <Clock
              aria-hidden="true"
              className="mt-1 size-5 shrink-0 text-foreground"
            />
            <ul className="text-muted-foreground">
              {studio.openingHours.map((item) => (
                <li key={item.days}>
                  {item.days}: {item.hours}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <LiquidGlassButton
          href={studio.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 px-10 py-4"
        >
          {heroContent.ctaLabel}
        </LiquidGlassButton>
      </div>
    </Section>
  )
}

export { Location }
