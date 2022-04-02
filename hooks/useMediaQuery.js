import { useState, useEffect, useCallback } from 'react'

// Hook for using media queries for conditional rendering that is compatible
// with NextJS server-side rendering. See https://github.com/chakra-ui/chakra-ui/issues/3124#issuecomment-799380374

export function useMediaQuery(width) {
  const [targetReached, setTargetReached] = useState(false)

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true)
    } else {
      setTargetReached(false)
    }
  }, [])

  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${width}px)`)
    media.addEventListener('change', (e) => updateTarget(e))

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true)
    }

    return () => media.removeEventListener('change', (e) => updateTarget(e))
  }, [updateTarget, width])

  return targetReached
}
