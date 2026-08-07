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

    // Dentro do menu mobile, cada link também fecha o Sheet (via SheetClose
    // composto no <a>), então o Base UI expõe esse elemento com role="button"
    // (ação primária: fechar o menu), não role="link".
    const { getByRole } = within(dialog)
    const linkInDialog = getByRole('button', { name: firstLink.label })
    expect(linkInDialog).toHaveAttribute('href', firstLink.href)

    await user.click(linkInDialog)

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('CTA points to the real WhatsApp link with a safe rel attribute', () => {
    render(<Nav />)

    const ctas = screen.getAllByRole('link', {
      name: /agende sua aula experimental/i,
    })
    expect(ctas.length).toBeGreaterThan(0)
    for (const cta of ctas) {
      expect(cta).toHaveAttribute('href', studio.whatsappUrl)
      expect(cta).toHaveAttribute('rel', 'noopener noreferrer')
    }
  })
})
