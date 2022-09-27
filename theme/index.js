import { extendTheme } from '@chakra-ui/react'

import styles from './styles'

import fonts from './fonts'

const overrides = {
  styles,
  fonts,
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
}

export default extendTheme(overrides)
