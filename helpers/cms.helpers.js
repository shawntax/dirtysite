import slugify from 'slugify'

const importAll = (r) => r.keys().map(r)

export function fetchArtists() {
  const artists = importAll(
    require.context('../content/artists', false, /^(.\/).*(.json)$/) // https://github.com/webpack/webpack/issues/12087
  )
  const result = artists.map((artist) => {
    artist.slug = slugify(artist.name, { lower: true })

    // grab the file name from the url to use in the dynamic path of the Photo component
    const url = artist.photoUrl ?? null
    artist.photoFileName = url?.split('/').pop()
    return artist
  })
  return result
}
