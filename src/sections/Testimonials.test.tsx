import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from '@/sections/Testimonials'
import type { Testimonial } from '@/data/studio'

const sample: Testimonial[] = [
  {
    name: 'Fulana',
    context: 'aluna há 6 meses',
    quote: 'Mudou minha postura.',
  },
  {
    name: 'Beltrana',
    context: 'aluna há 1 ano',
    quote: 'Melhor decisão que tomei.',
  },
  { name: 'Ciclana', context: 'aluna há 3 meses', quote: 'Equipe incrível.' },
]

describe('Testimonials', () => {
  it('shows an honest empty state when there are no testimonials yet (current real data)', () => {
    render(<Testimonials testimonials={[]} />)

    expect(screen.getByText(/em breve/i)).toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: /next slide/i }),
    ).not.toBeInTheDocument()
  })

  it('renders every testimonial and exposes keyboard/button navigation controls', async () => {
    // jsdom não faz layout real (larguras ficam 0), então o embla-carousel
    // nunca reporta "há mais slide pra rolar" e os botões permanecem
    // desabilitados aqui — isso é uma limitação do ambiente de teste, não
    // do componente. O que dá pra verificar com confiança: todo depoimento
    // renderiza, os controles de navegação existem e são operáveis
    // (clique/teclado) sem lançar erro.
    const user = userEvent.setup()
    render(<Testimonials testimonials={sample} />)

    for (const testimonial of sample) {
      expect(
        screen.getByText(testimonial.name, { exact: false }),
      ).toBeInTheDocument()
    }

    const nextButton = screen.getByRole('button', { name: /next slide/i })
    const previousButton = screen.getByRole('button', {
      name: /previous slide/i,
    })
    expect(nextButton).toBeInTheDocument()
    expect(previousButton).toBeInTheDocument()

    await user.click(nextButton)
    await user.keyboard('{ArrowRight}{ArrowLeft}')
  })
})
