import { chakra } from '@chakra-ui/react'
import Image from 'next/image'

const NCImage = chakra(Image, {
  shouldForwardProp: (prop) =>
    ['height', 'width', 'quality', 'layout', 'src', 'alt'].includes(prop),
})

export default NCImage
