import { SimpleGrid } from '@chakra-ui/react'
import { getLayout } from '@components/SiteLayout'
import ArtistCard from '@components/ArtistCard'
import { fetchArtists } from '@helpers/cms.helpers'

export default function Artists() {
  const artists = fetchArtists()

  return (
    <SimpleGrid minChildWidth="200px" spacing="5" mt="5">
      {artists.map((artist) => {
        return <ArtistCard key={artist.id} artist={artist} />
      })}
    </SimpleGrid>
  )
}

Artists.getLayout = getLayout
