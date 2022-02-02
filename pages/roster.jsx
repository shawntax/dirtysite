import PageContainer from '../components/PageContainer'
import { SimpleGrid } from '@chakra-ui/react'
import Card from '../components/Card'

export default function Roster() {
  return (
    <PageContainer title="Roster">
      <SimpleGrid
        columns={{ md: 2, xl:3}}
        spacing="10px"
        px="8"
      >
        <Card
          djname="Knives"
          bio="Lorem Ipsum dorito delicious. Illus dorus parabem."
          instaLink="djknives"
          fbLink="djknivesofficial"
          scLink="djknivesofficial"
        />
        <Card
          djname="JaxxT"
          bio="Lorem Ipsum dorito delicious. Illus dorus parabem."
          instaLink="jaxxtofficial"
          fbLink="jaxxtofficial"
          scLink="jaxxtofficial"
        />
        <Card
          djname="CatLiu"
          bio="Lorem Ipsum dorito delicious. Illus dorus parabem."
          instaLink="catliu"
          fbLink="catliu"
          scLink="catliu"
        />
        <Card
          djname="Glaas"
          bio="Lorem Ipsum dorito delicious. Illus dorus parabem."
          instaLink="glaasmusic"
          fbLink="glaas"
          scLink="glaasmusic"
        />

      </SimpleGrid>
    </PageContainer>
  )
}
