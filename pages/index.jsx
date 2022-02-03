import PageContainer from '../components/PageContainer'
import { Container, Center } from '@chakra-ui/react'
import { attributes, react as HomeContent } from '../content/pages/home.md'

export default function Home() {
  let { hero_title, hero_subtitle } = attributes
  return (
    <PageContainer title="Home" bg="black">
      <Center w="100" h="100%" bg="black" textColor="white">
        {hero_title}
      </Center>
      <Container>
        <Center textColor="white">{hero_subtitle}</Center>
      </Container>
    </PageContainer>
  )
}
