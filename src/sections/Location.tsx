import { Clock, MapPin } from 'lucide-react'
import { Section } from '@/components/Section'
import { ExternalLink } from '@/components/ExternalLink'
import { InstagramIcon } from '@/components/icons/InstagramIcon'
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
          <div className="flex flex-col gap-8">
            <div className="liquid-glass inline-block rounded-2xl px-5 py-4">
              <div className="flex items-center gap-2 text-foreground">
                <Clock aria-hidden="true" className="size-4" />
                <p>Horário</p>
              </div>
              {studio.openingHours.map((item) => (
                <p
                  key={item.days}
                  className="mt-1 text-sm text-muted-foreground"
                >
                  {item.days}: {item.hours}
                </p>
              ))}
            </div>

            <div>
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

              <div className="mt-4 overflow-hidden rounded-2xl">
                <iframe
                  src={studio.mapsEmbedUrl}
                  title={`Mapa com a localização do ${studio.name}`}
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          <div className="liquid-glass flex flex-col items-center gap-3 rounded-2xl px-5 py-4">
            <div className="flex items-center gap-2 self-start text-foreground">
              <InstagramIcon aria-hidden="true" className="size-5" />
              <p>Acompanhe no Instagram</p>
            </div>
            <div className="w-full max-w-xs overflow-hidden rounded-xl">
              <iframe
                src={`${studio.instagramReelUrl}embed`}
                title={`Vídeo do Instagram do ${studio.name}`}
                width="100%"
                height="580"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
            <ExternalLink
              href={studio.instagramReelUrl}
              className="text-sm text-foreground underline underline-offset-4"
            >
              Ver no Instagram
            </ExternalLink>
          </div>
        </div>

        <div className="mt-10 text-center">
          <LiquidGlassButton
            href={studio.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4"
          >
            {heroContent.ctaLabel}
          </LiquidGlassButton>
        </div>
      </div>
    </Section>
  )
}

export { Location }
