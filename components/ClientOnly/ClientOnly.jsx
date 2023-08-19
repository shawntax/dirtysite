import { useState, useEffect } from 'react'

const ClientOnly = ({ children, ...delegated }) => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    console.log('not mounted!')
    return null
  }

  console.log('mounted!')

  return <div {...delegated}>{children}</div>
}

export default ClientOnly
