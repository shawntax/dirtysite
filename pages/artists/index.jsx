import { SimpleGrid } from '@chakra-ui/react'
import PageContainer from '@components/PageContainer'
import ArtistCard from '@components/ArtistCard'
import { fetchArtists } from '@helpers/cms.helpers'

export default function Artists() {
  const artists = fetchArtists()

  return (
    <PageContainer title="Artists" h="100%" bg="black">
      <SimpleGrid minChildWidth="200px" spacing="20px" p="5" bg="black">
        {artists.map((artist) => {
          return <ArtistCard key={artist.id} artist={artist} />
        })}
      </SimpleGrid>
    </PageContainer>
  )
}
