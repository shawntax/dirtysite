import { useColorMode } from '@chakra-ui/react'
import Head from 'next/head'

function Favicon() {
  const { colorMode } = useColorMode()
  const faviconHref = `/favicon-${colorMode === 'dark' ? 'dark' : 'light'}.svg`
  return (
    <Head>
      <link rel="icon" href={faviconHref} type="image/svg+xml" key="favicon" />
    </Head>
  )
}

export default Favicon
