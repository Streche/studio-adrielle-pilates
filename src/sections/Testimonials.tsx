import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Section } from '@/components/Section'
import {
  studio,
  testimonials as realTestimonials,
  type Testimonial,
} from '@/data/studio'
import { useInView } from '@/hooks/useInView'

interface TestimonialsProps {
  /** Injetável em testes; por padrão usa os depoimentos reais de studio.ts. */
  testimonials?: Testimonial[]
}

function Testimonials({ testimonials = realTestimonials }: TestimonialsProps) {
  const { ref, isInView } = useInView<HTMLDivElement>()

  return (
    <Section
      id="depoimentos"
      ariaLabelledBy="testimonials-heading"
      className="bg-secondary/30"
    >
      <div ref={ref} className={isInView ? 'animate-fade-rise' : 'opacity-0'}>
        <h2
          id="testimonials-heading"
          className="font-display text-3xl text-foreground sm:text-4xl"
        >
          Depoimentos
        </h2>

        {testimonials.length === 0 ? (
          <p className="mt-6 max-w-xl text-muted-foreground">
            Em breve, depoimentos de quem já treina com a gente. Agende sua aula
            experimental em <strong>{studio.name}</strong> e seja a próxima
            história por aqui.
          </p>
        ) : (
          <Carousel className="mt-10 px-4 sm:px-12">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.name}
                  className="sm:basis-1/2 lg:basis-1/3"
                >
                  <figure className="liquid-glass h-full rounded-2xl p-6">
                    <blockquote className="text-foreground">
                      “{testimonial.quote}”
                    </blockquote>
                    <figcaption className="mt-4 text-sm text-muted-foreground">
                      {testimonial.name} — {testimonial.context}
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        )}
      </div>
    </Section>
  )
}

export { Testimonials }
