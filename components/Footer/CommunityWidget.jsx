import { useEffect, useState, useRef } from 'react'
import { Box } from '@chakra-ui/react'

const EMBED_ID = '8f9f5079-99cf-451f-b2fc-8baafc2a652d'

const CommunityWidget = () => {
  const ref = useRef(null)
  useScript('https://mgu-embed.community.com/embed.js', ref)
  return <Box id="community-embed" ref={ref} w="100%" />
}

function useScript(src, ref) {
  // Keep track of script status ("idle", "loading", "ready", "error")
  const [status, setStatus] = useState(src ? 'loading' : 'idle')

  useEffect(() => {
    // Allow falsy src value if waiting on other data needed for
    // constructing the script URL passed to this hook.
    if (!src) {
      setStatus('idle')
      return
    }

    // Fetch existing script element by src
    // It may have been added by another intance of this hook
    let script = document.querySelector(`script[src="${src}"]`)

    let currentRef = ref.current

    if (!script) {
      // Create script
      script = document.createElement('script')
      script.src = src
      script.async = true
      script.setAttribute('data-status', 'loading')
      script.setAttribute('data-nscript', 'afterInteractive')
      script.setAttribute('data-community-embed-id', EMBED_ID)
      // Add script to document body
      document.body.appendChild(script)

      // Store status in attribute on script
      // This can be read by other instances of this hook
      const setAttributeFromEvent = (event) => {
        script.setAttribute(
          'data-status',
          event.type === 'load' ? 'ready' : 'error'
        )
      }

      script.addEventListener('load', setAttributeFromEvent)
      script.addEventListener('error', setAttributeFromEvent)
    } else {
      // Grab existing script status from attribute and set to state.
      setStatus(script.getAttribute('data-status'))
    }

    // Script event handler to update status in state
    // Note: Even if the script already exists we still need to add
    // event handlers to update the state for *this* hook instance.
    const setStateFromEvent = (event) => {
      setStatus(event.type === 'load' ? 'ready' : 'error')
    }

    if (ref.current) {
      ref.current.appendChild(script)
    }

    // Add event listeners
    script.addEventListener('load', setStateFromEvent)
    script.addEventListener('error', setStateFromEvent)

    // Remove event listeners on cleanup
    return () => {
      if (script) {
        script.removeEventListener('load', setStateFromEvent)
        script.removeEventListener('error', setStateFromEvent)
      }
      if (currentRef) {
        currentRef.removeChild(script)
      }
    }
  }, [src, ref])

  return status
}

export default CommunityWidget
