import PageContainer from '../components/PageContainer'
import { SimpleGrid } from '@chakra-ui/react'
import Card from '../components/Card'

export default function Artists() {
  return (
    <PageContainer title="Artists">
      <SimpleGrid minChildWidth="200px" spacing="30px" p="5" bg="black">
        <Card djName="Knives" djPhoto="group.jpg" hoverPhoto="knives-7.png" />
        <Card djName="JaxxT" djPhoto="group.jpg" />
        <Card djName="CatLiu" djPhoto="group.jpg" />
        <Card djName="Glaas" djPhoto="group.jpg" />
        <Card djName="i2i" djPhoto="group.jpg" />
        <Card djName="Aanster & Mikey the Lad" djPhoto="group.jpg" />
        <Card djName="Damasek" djPhoto="group.jpg" />
      </SimpleGrid>
    </PageContainer>
  )
}
