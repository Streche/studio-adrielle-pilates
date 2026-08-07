import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from '@/sections/Hero'
import { heroContent, studio } from '@/data/studio'

describe('Hero', () => {
  it('renders a single h1 and the background image alt text', () => {
    render(<Hero />)

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByAltText(heroContent.imageAlt)).toBeInTheDocument()
  })

  it('CTA points to the real WhatsApp link with a safe rel attribute', () => {
    render(<Hero />)

    const cta = screen.getByRole('link', { name: heroContent.ctaLabel })
    expect(cta).toHaveAttribute('href', studio.whatsappUrl)
    expect(cta).toHaveAttribute('target', '_blank')
    expect(cta).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
