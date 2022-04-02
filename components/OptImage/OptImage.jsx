import React from 'react'
import { chakra } from '@chakra-ui/react'

const OptimizedImage = ({ filename, ...props }) => (
  <picture>
    <source
      srcSet={require(`../../public/${filename}?webp`)}
      type="image/webp"
    />
    <source srcSet={require(`../../public/${filename}`)} type="image/jpg" />
    <chakra.img
      src={require(`../../public/${filename}?webp`)}
      alt=""
      objectFit="cover"
      {...props}
    />
  </picture>
)

export default OptimizedImage
