import PropTypes from 'prop-types'
import Image from 'next/image'

const Photo = ({ fileName, ...props }) => {
  const blurURL =
    'data:image/webp;base64,UklGRkoBAABXRUJQVlA4ID4BAABwDQCdASqqAHEAPpFEm0s7NakhpNJ7G2ASCWlu4AAfcHR25/zVS9/7gBmd5fjruUWFoe10M6yIgYw4ZQew3gdjouLwsxo2TqyHATpE95NCEG9CdSYiqVF78FVcJb9VbbqxBgus8jyJDiBgSKK6naV3lMy94AD+8EBC3HaD4uK2mUi0pidsQJQEDTzHFPhSO3k+wO9Y/PMXbtQ8fGu+HOJyHu7X+Ixo5UUYpu2pn2FVUI060+WGABWV5OMUEmlUSnyxRT0j/+ehffiVh1OM78apcUwH9QIsHs/SZ5x+jyVPLUzc9kinTKk4yhEZ5b6C2eFlsdAjleRYyYZKSedN2sV5OEpMkC0f2nuBjDaAJZfxbY1uSTAbxz0+S5fTjmfeYQfmDcT9U9ey3v6fBTSNYI7CLrC0heMOqWcazBsVAAA='
  return (
    <Image
      src={`/media/${fileName}`}
      alt={fileName}
      fill={props.fill ?? false}
      placeholder="blur"
      blurDataURL={blurURL}
      {...props}
    />
  )
}

Photo.propTypes = {
  fileName: PropTypes.string,
}

export default Photo
