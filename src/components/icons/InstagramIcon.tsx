import type { ComponentProps } from 'react'

/**
 * lucide-react não inclui mais ícones de marca (Instagram, Facebook etc.).
 * Glifo simples inline no mesmo estilo visual (stroke) dos ícones do lucide,
 * evitando adicionar uma dependência inteira só por causa de um ícone.
 */
function InstagramIcon(props: ComponentProps<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

export { InstagramIcon }
