import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { LiquidGlassButton } from '@/components/LiquidGlassButton'
import { nav, studio } from '@/data/studio'

function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      aria-label="Navegação principal"
      className="sticky top-0 z-40 border-b border-transparent bg-background/70 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 sm:px-8">
        <a href="#inicio" className="shrink-0">
          <img
            src="/images/logo.jpg"
            alt={studio.name}
            width={44}
            height={44}
            className="rounded-lg"
          />
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>

        <LiquidGlassButton
          href={studio.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 whitespace-nowrap lg:inline-flex"
        >
          Agendar aula
        </LiquidGlassButton>

        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger
            render={
              <Button variant="ghost" size="icon" className="lg:hidden" />
            }
          >
            <Menu aria-hidden="true" />
            <span className="sr-only">Abrir menu</span>
          </PopoverTrigger>
          <PopoverContent align="end" className="w-56">
            <div className="flex flex-col gap-1">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-1.5 text-sm text-popover-foreground transition-colors hover:bg-foreground/10"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <LiquidGlassButton
              href={studio.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="w-full"
            >
              Agende sua aula experimental
            </LiquidGlassButton>
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  )
}

export { Nav }
