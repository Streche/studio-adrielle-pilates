import { MessageCircle } from 'lucide-react'
import { ExternalLink } from '@/components/ExternalLink'
import { InstagramIcon } from '@/components/icons/InstagramIcon'
import { studio } from '@/data/studio'

function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
        <p
          className="text-xl text-foreground"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {studio.name}
        </p>
        <div className="flex items-center gap-6">
          <ExternalLink
            href={studio.instagramUrl}
            aria-label="Abrir Instagram do Studio Adrielle Ferreira"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <InstagramIcon aria-hidden="true" className="size-6" />
          </ExternalLink>
          <ExternalLink
            href={studio.whatsappUrl}
            aria-label="Falar no WhatsApp com o Studio Adrielle Ferreira"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <MessageCircle aria-hidden="true" className="size-6" />
          </ExternalLink>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {studio.name}
        </p>
      </div>
    </footer>
  )
}

export { Footer }
