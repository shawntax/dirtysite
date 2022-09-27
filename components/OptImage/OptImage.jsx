import React from 'react'
import { chakra } from '@chakra-ui/react'

const OptimizedImage = ({ fileName, ...props }) => (
  <picture>
    <source
      srcSet={require(`../../public/${fileName}?webp`)}
      type="image/webp"
    />
    <source srcSet={require(`../../public/${fileName}`)} type="image/jpg" />

    <chakra.img
      src={require(`../../public/${fileName}?webp`)}
      alt=""
      objectFit="cover"
      {...props}
    />
  </picture>
)

export default OptimizedImage
