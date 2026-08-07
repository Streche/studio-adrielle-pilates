// Setup global de testes: adiciona os matchers do jest-dom (toBeInTheDocument, etc.)
// e limpa o DOM entre os testes.
import '@testing-library/jest-dom/vitest'
import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'

// jsdom não implementa window.matchMedia. O embla-carousel (usado pelo
// componente Carousel do shadcn/ui) chama isso ao montar, então sem esse
// stub qualquer teste que renderize um Carousel quebra.
if (!window.matchMedia) {
  window.matchMedia = (query: string) =>
    ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }) as MediaQueryList
}

// jsdom também não implementa IntersectionObserver (usado pelo embla-carousel
// internamente e pelo hook useInView). Stub mínimo que nunca dispara — testes
// que precisam simular a interseção definem o próprio mock com vi.stubGlobal.
if (typeof globalThis.IntersectionObserver === 'undefined') {
  class NoopIntersectionObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords(): IntersectionObserverEntry[] {
      return []
    }
  }
  globalThis.IntersectionObserver =
    NoopIntersectionObserver as unknown as typeof IntersectionObserver
}

// Idem para ResizeObserver, também usado pelo embla-carousel.
if (typeof globalThis.ResizeObserver === 'undefined') {
  class NoopResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  globalThis.ResizeObserver =
    NoopResizeObserver as unknown as typeof ResizeObserver
}

afterEach(() => {
  cleanup()
})
