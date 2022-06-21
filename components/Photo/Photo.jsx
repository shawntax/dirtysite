import PropTypes from 'prop-types'
import { chakra } from '@chakra-ui/react'

const Photo = ({ fileName, ...props }) => {
  // TODO: handle a null fileName
  return (
    <picture>
      <source
        srcSet={require(`@public/media/${fileName}?webp`)}
        type="image/webp"
      />
      <source srcSet={require(`@public/media/${fileName}`)} type="image/jpg" />
      <chakra.img
        src={require(`@public/media/${fileName}?webp`)}
        alt={fileName}
        objectFit={props.fit ?? 'fill'}
        {...props}
      />
    </picture>
  )
}

Photo.propTypes = {
  fileName: PropTypes.string,
}

export default Photo
