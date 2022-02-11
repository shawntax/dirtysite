import PageContainer from '../components/PageContainer'
import { GridItem, SimpleGrid } from '@chakra-ui/react'
import Card from '../components/Card'

export default function Artists() {
  const importAll = (r) => r.keys().map(r)
  const artists = importAll(
    require.context('../content/artists', false, /\.json$/)
  )

  return (
    <PageContainer title="Artists">
      <SimpleGrid minChildWidth="200px" spacing="30px" p="5" bg="black">
        {artists.map((artist) => {
          return <Card djName={artist.djName} djPhoto={artist.djPhoto}></Card>
        })}
      </SimpleGrid>
    </PageContainer>
  )
}
