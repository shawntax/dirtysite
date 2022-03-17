import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'

// import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  if (Component.displayName == 'AdminPage') {
    return <Component {...pageProps} />
  }
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
