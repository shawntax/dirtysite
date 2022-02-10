import PageContainer from '../components/PageContainer'
import { GridItem, SimpleGrid } from '@chakra-ui/react'
import Card from '../components/Card'
import { render } from 'react-dom'

export default function Artists() {
  const importAll = (r) => r.keys().map(r)
  const artists = importAll(
    require.context('../content/artists', false, /\.md$/)
  )

  return (
    <PageContainer title="Artists">
      <SimpleGrid
        columns={{ sm: 2, md: 3, lg: 4, xl: 5, '2xl': 6 }}
        spacingY="6"
        spacingX="6"
        px="5"
        pt="5"
      >
        {artists.map((artist) => {
          return (
            <Card
              djName={artist.attributes.djName}
              djPhoto={artist.attributes.djPhoto}
            ></Card>
          )
        })}
      </SimpleGrid>
    </PageContainer>
  )
}
