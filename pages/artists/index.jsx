import PageContainer from '../../components/PageContainer'
import { SimpleGrid } from '@chakra-ui/react'
import ArtistCard from '../../components/ArtistCard'

export async function getStaticProps() {
  const importAll = (r) => r.keys().map(r)
  const artists = importAll(
    require.context('../../content/artists', false, /\.json$/)
  )
  return {
    props: { artists },
  }
}

export default function Artists({ artists }) {
  return (
    <PageContainer title="Artists">
      <SimpleGrid minChildWidth="200px" spacing="20px" p="5" bg="black">
        {artists
          .sort((a, b) => a.id - b.id)
          .map((artist) => {
            return <ArtistCard key={artist.id} artist={artist}></ArtistCard>
          })}
      </SimpleGrid>
    </PageContainer>
  )
}
