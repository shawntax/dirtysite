import { SimpleGrid } from '@chakra-ui/react'
import { getLayout } from '@components/SiteLayout'
import ArtistCard from '@components/ArtistCard'
import PageHeader from '@components/PageHeader'
import { fetchArtists } from '@helpers/cms.helpers'
import { attributes } from '@content/pages/artists.md'

export default function Artists({ artists }) {
  const { seoDesc } = attributes

  return (
    <>
      <PageHeader title="Artists" seoDesc={seoDesc}>
        Artists
      </PageHeader>
      <SimpleGrid minChildWidth="260px" spacing="8" mt="5">
        {artists.map((artist) => {
          return <ArtistCard key={artist.id} artist={artist} />
        })}
      </SimpleGrid>
    </>
  )
}

export async function getServerSideProps({ req, res }) {
  const artists = fetchArtists()

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=3540, stale-while-revalidate=60'
  )

  return {
    props: {
      artists,
    },
  }
}
Artists.pageName = 'Artists'
Artists.getLayout = getLayout
