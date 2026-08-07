import type { ComponentProps } from 'react'

type ExternalLinkProps = ComponentProps<'a'>

function ExternalLink({ children, ...props }: ExternalLinkProps) {
  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  )
}

export { ExternalLink }
