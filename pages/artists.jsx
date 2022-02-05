import PageContainer from '../components/PageContainer'
import { SimpleGrid } from '@chakra-ui/react'
import Card from '../components/Card'

export default function Artists() {
  return (
    <PageContainer title="Artists">
      <SimpleGrid
        columns={{ sm: 2, md: 3, lg: 4, xl: 5, '2xl': 6 }}
        spacing="10px"
        px="8"
        area="10"
      >
        <Card djName="Knives" djPhoto="group.jpg" hoverPhoto="knives-7.png" />
        <Card djName="JaxxT" djPhoto="group.jpg" />
        <Card djName="CatLiu" djPhoto="group.jpg" />
        <Card djName="Glaas" djPhoto="group.jpg" />
        <Card djName="i2i" djPhoto="group.jpg" />
        <Card djName="Aanster" djPhoto="group.jpg" />
      </SimpleGrid>
    </PageContainer>
  )
}
