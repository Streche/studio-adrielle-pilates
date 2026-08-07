import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { LiquidGlassButton } from '@/components/LiquidGlassButton'
import { nav, studio } from '@/data/studio'

function Nav() {
  return (
    <nav
      aria-label="Navegação principal"
      className="sticky top-0 z-40 border-b border-transparent bg-background/70 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
        <a
          href="#inicio"
          className="text-2xl tracking-tight text-foreground"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {studio.name}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>

        <LiquidGlassButton
          href={studio.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex"
        >
          Agende sua aula experimental
        </LiquidGlassButton>

        <Sheet>
          <SheetTrigger
            render={
              <Button variant="ghost" size="icon" className="md:hidden" />
            }
          >
            <Menu aria-hidden="true" />
            <span className="sr-only">Abrir menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-3/4 gap-8 p-6">
            <SheetTitle className="sr-only">Menu de navegação</SheetTitle>
            <div className="mt-8 flex flex-col gap-6">
              {nav.map((item) => (
                <SheetClose
                  key={item.href}
                  nativeButton={false}
                  render={
                    <a href={item.href} className="text-lg text-foreground" />
                  }
                >
                  {item.label}
                </SheetClose>
              ))}
            </div>
            <LiquidGlassButton
              href={studio.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto"
            >
              Agende sua aula experimental
            </LiquidGlassButton>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}

export { Nav }
