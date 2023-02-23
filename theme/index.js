import { extendTheme } from '@chakra-ui/react'

const styles = {
  global: {
    'html, body': {
      padding: 0,
      margin: 0,
      color: 'white',
      bg: 'black',
      scrollBehavior: 'smooth',
    },
    a: {
      // textDecorationLine: 'underline',
      // textDecorationStyle: 'wavy',
      // textDecorationColor: 'gray.400',
    },
  },
}

const fonts = {
  heading: 'Oswald, sans-serif',
  body: 'Darker Grotesque, sans-serif',
}

const config = {
  initialColorMode: 'system',
  disableTransitionOnChange: false,
}

export default extendTheme({ config, styles, fonts })
