import PageContainer from '../components/PageContainer'
import { GridItem, SimpleGrid } from '@chakra-ui/react'
import Card from '../components/Card'

export default function Artists() {
  const importAll = (r) => r.keys().map(r)
  const artists = importAll(
    require.context('../content/artists', false, /\.md$/)
  )
  console.log(artists[0].attributes.djName)

  const artistList = artists.forEach((element) => {
    console.log('BRO', element)
    return <GridItem djName={element.attributes.djName}></GridItem>
  })
  return (
    <PageContainer title="Artists">
      <SimpleGrid
        columns={{ sm: 2, md: 3, lg: 4, xl: 5, '2xl': 6 }}
        spacingY="6"
        spacingX="6"
        px="5"
        pt="5"
      >
        {artistList}
      </SimpleGrid>
    </PageContainer>
  )
}
