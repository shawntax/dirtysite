import PageContainer from '../../components/PageContainer'
import { SimpleGrid, Center, useMediaQuery } from '@chakra-ui/react'
import Card from '../../components/ArtistCard'

export default function Artists() {
  const importAll = (r) => r.keys().map(r)
  let artists = importAll(
    require.context('../../content/artists', false, /\.json$/)
  )
  artists.map((artist) => {
    artist['slug'] = artist.name.toLowerCase().replace(/\s/g, '')
  })
  const [isSmallerthan491] = useMediaQuery('(max-width: 491px)')
  const [isLargerThan492] = useMediaQuery('(min-width: 492px)')
  return (
    <PageContainer title="Artists" h="100%" bg="black">
      {isLargerThan492 ? (
        <SimpleGrid minChildWidth="200px" spacing="20px" p="5" bg="black">
          {artists.map((artist) => {
            return <Card key={artist.slug} artist={artist}></Card>
          })}
        </SimpleGrid>
      ) : (
        <></>
      )}
      {isSmallerthan491 ? (
        <Center>
          <SimpleGrid minChildWidth="200px" spacing="20px" p="5" bg="black">
            {artists.map((artist) => {
              return <Card key={artist.slug} artist={artist}></Card>
            })}
          </SimpleGrid>
        </Center>
      ) : (
        <></>
      )}
    </PageContainer>
  )
}
