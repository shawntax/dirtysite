import PageContainer from '../components/PageContainer'
import { SimpleGrid } from '@chakra-ui/react'
import Card from '../components/Card'

export default function Roster() {
  return (
    <PageContainer title="Roster">
      <SimpleGrid
        columns={{ sm: 2, md: 3, lg: 4, xl: 5, '2xl': 6 }}
        spacing="10px"
        px="8"
        area="10"
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
        <Card
          djname="i2i"
          bio="Lorem Ipsum dorito delicious. Illus dorus parabem."
          instaLink="glaasmusic"
          fbLink="glaas"
          scLink="glaasmusic"
        />
        <Card
          djname="Aanster"
          bio="Lorem Ipsum dorito delicious. Illus dorus parabem."
          instaLink="glaasmusic"
          fbLink="glaas"
          scLink="glaasmusic"
        />
      </SimpleGrid>
    </PageContainer>
  )
}
