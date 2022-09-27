import { SimpleGrid } from '@chakra-ui/react'
import { getLayout } from '@components/SiteLayout'
import ArtistCard from '@components/ArtistCard'
import PageHeader from '@components/PageHeader'
import { fetchArtists } from '@helpers/cms.helpers'
import { attributes } from '@content/pages/artists.md'

export default function Artists({ artists }) {
  const { seoDesc } = attributes

export default function Artists({ artists }) {
  return (
    <>
      <PageHeader title="Artists" seoDesc={seoDesc}>
        Artists
      </PageHeader>
      <SimpleGrid minChildWidth="200px" spacing="5" mt="5">
        {artists.map((artist) => {
          return <ArtistCard key={artist.id} artist={artist} />
        })}
      </SimpleGrid>
    </>
  )
}

export async function getStaticProps() {
  const artists = fetchArtists()

  return {
    props: {
      artists,
    },
  }
}
Artists.pageName = 'Artists'
Artists.getLayout = getLayout
