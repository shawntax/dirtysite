import PageContainer from '../../components/PageContainer'
import { SimpleGrid } from '@chakra-ui/react'
import Card from '../../components/ArtistCard'

export default function Artists() {
  const importAll = (r) => r.keys().map(r)
  const artists = importAll(
    require.context('../../content/artists', false, /\.json$/)
  )

  return (
    <PageContainer title="Artists">
      <SimpleGrid minChildWidth="200px" spacing="20px" p="5" bg="black">
        {artists.map((artist) => {
          return <Card key={artist.id} artist={artist}></Card>
        })}
      </SimpleGrid>
    </PageContainer>
  )
}
