import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Nav } from '@/components/Nav'
import { nav, studio } from '@/data/studio'

describe('Nav', () => {
  it('renders the brand and every nav link', () => {
    render(<Nav />)

    expect(screen.getByRole('link', { name: studio.name })).toBeInTheDocument()
    for (const item of nav) {
      expect(screen.getByRole('link', { name: item.label })).toBeInTheDocument()
    }
  })

  it('opens the mobile menu, exposes the links again, and closes on link click', async () => {
    const user = userEvent.setup()
    render(<Nav />)

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /abrir menu/i }))

    const dialog = await screen.findByRole('dialog')
    expect(dialog).toBeInTheDocument()

    const firstLink = nav[0]
    if (!firstLink) throw new Error('nav deve ter pelo menos um link')

    const linkInDialog = within(dialog).getByRole('link', {
      name: firstLink.label,
    })
    expect(linkInDialog).toHaveAttribute('href', firstLink.href)

    await user.click(linkInDialog)

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('desktop CTA points to the real WhatsApp link with a safe rel attribute', () => {
    render(<Nav />)

    // Rótulo mais curto na barra fixa (espaço apertado ao lado de 6 links);
    // o menu mobile usa o texto completo (ver teste abaixo).
    const cta = screen.getByRole('link', { name: /agendar aula/i })
    expect(cta).toHaveAttribute('href', studio.whatsappUrl)
    expect(cta).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('mobile menu CTA also points to the real WhatsApp link', async () => {
    const user = userEvent.setup()
    render(<Nav />)

    await user.click(screen.getByRole('button', { name: /abrir menu/i }))
    const dialog = await screen.findByRole('dialog')

    const cta = within(dialog).getByRole('link', {
      name: /agende sua aula experimental/i,
    })
    expect(cta).toHaveAttribute('href', studio.whatsappUrl)
    expect(cta).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
