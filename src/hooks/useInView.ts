import { useEffect, useRef, useState } from 'react'

interface UseInViewResult<T extends Element> {
  ref: React.RefObject<T | null>
  isInView: boolean
}

/**
 * Dispara `isInView` quando o elemento entra na viewport, para animar
 * fade-rise ao rolar. Começa visível (progressive enhancement): só passa a
 * "esconder e aguardar" depois de confirmar que há um IntersectionObserver
 * ativo observando o elemento — assim o conteúdo nunca fica preso invisível
 * se o observer falhar ou não existir no navegador.
 */
function useInView<T extends Element>(): UseInViewResult<T> {
  const ref = useRef<T>(null)
  const [isInView, setIsInView] = useState(true)
  const [isObserving, setIsObserving] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') return

    setIsObserving(true)
    setIsInView(false)

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry?.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return { ref, isInView: isObserving ? isInView : true }
}

export { useInView }
