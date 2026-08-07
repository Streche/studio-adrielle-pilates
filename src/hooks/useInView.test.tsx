import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import { useInView } from '@/hooks/useInView'

let observe: ReturnType<typeof vi.fn>
let disconnect: ReturnType<typeof vi.fn>
let observerCallback: IntersectionObserverCallback

function TestComponent() {
  const { ref, isInView } = useInView<HTMLDivElement>()
  return <div ref={ref}>{isInView ? 'visible' : 'hidden'}</div>
}

describe('useInView', () => {
  beforeEach(() => {
    observe = vi.fn()
    disconnect = vi.fn()

    class MockIntersectionObserver {
      constructor(callback: IntersectionObserverCallback) {
        observerCallback = callback
      }
      observe = observe
      disconnect = disconnect
      unobserve = vi.fn()
      takeRecords = vi.fn(() => [])
    }

    vi.stubGlobal(
      'IntersectionObserver',
      MockIntersectionObserver as unknown as typeof IntersectionObserver,
    )
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('hides the element, then reveals it once the observer reports intersection', () => {
    render(<TestComponent />)

    expect(screen.getByText('hidden')).toBeInTheDocument()
    expect(observe).toHaveBeenCalledTimes(1)

    act(() => {
      observerCallback(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver,
      )
    })

    expect(screen.getByText('visible')).toBeInTheDocument()
    expect(disconnect).toHaveBeenCalledTimes(1)
  })

  it('stays visible when IntersectionObserver is unavailable (progressive enhancement)', () => {
    vi.stubGlobal('IntersectionObserver', undefined)

    render(<TestComponent />)

    expect(screen.getByText('visible')).toBeInTheDocument()
  })
})
