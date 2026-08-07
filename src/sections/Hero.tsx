import { LiquidGlassButton } from '@/components/LiquidGlassButton'
import { heroContent, studio } from '@/data/studio'

function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center"
    >
      <picture className="absolute inset-0 -z-10">
        <source
          type="image/avif"
          srcSet="/images/hero/hero-640.avif 640w, /images/hero/hero-1024.avif 1024w, /images/hero/hero-1600.avif 1600w, /images/hero/hero-2400.avif 2400w"
          sizes="100vw"
        />
        <source
          type="image/webp"
          srcSet="/images/hero/hero-640.webp 640w, /images/hero/hero-1024.webp 1024w, /images/hero/hero-1600.webp 1600w, /images/hero/hero-2400.webp 2400w"
          sizes="100vw"
        />
        <img
          src="/images/hero/hero-1600.jpg"
          srcSet="/images/hero/hero-640.jpg 640w, /images/hero/hero-1024.jpg 1024w, /images/hero/hero-1600.jpg 1600w, /images/hero/hero-2400.jpg 2400w"
          sizes="100vw"
          alt={heroContent.imageAlt}
          loading="eager"
          fetchPriority="high"
          className="animate-ken-burns h-full w-full object-cover"
        />
      </picture>

      {/* Gradiente escuro sobre a foto real (não uniformemente escura como um
          vídeo em loop seria) para garantir legibilidade do texto branco. */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/70 to-background/30" />

      <h1
        id="hero-heading"
        className="animate-fade-rise max-w-4xl text-5xl leading-[0.95] font-normal tracking-tight text-foreground sm:text-7xl md:text-8xl"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        Transforme seu corpo.{' '}
        <em className="text-muted-foreground not-italic">
          Reconecte sua mente.
        </em>
      </h1>

      <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        {heroContent.subheadline}
      </p>

      <LiquidGlassButton
        href={studio.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="animate-fade-rise-delay-2 mt-12 px-14 py-5 text-base"
      >
        {heroContent.ctaLabel}
      </LiquidGlassButton>
    </section>
  )
}

export { Hero }
