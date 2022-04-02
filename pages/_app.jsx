import { ChakraProvider } from '@chakra-ui/react'
import '@styles/globals.css'

function App({ Component, pageProps }) {
  if (Component.displayName == 'AdminPage') {
    return <Component {...pageProps} />
  } else {
    return (
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    )
  }
}

export default App
