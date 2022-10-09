import PropTypes from 'prop-types'
import Image from 'next/image'

const Photo = ({ fileName, ...props }) => {
  // opt-out of image optimization, no-op
  const customLoader = ({ src }) => {
    return src
  }

  return (
    <Image
      loader={customLoader}
      unoptimized={true}
      src={`/media/${fileName}`}
      alt={fileName}
      layout={props.layout ?? 'intrinsic'}
      objectFit={props.objectFit ?? 'fill'}
      {...props}
    />
  )
}

Photo.propTypes = {
  fileName: PropTypes.string,
}

export default Photo
