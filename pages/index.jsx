import PageContainer from '../components/PageContainer'
import { Flex, Text } from '@chakra-ui/react'
import { attributes } from '../content/pages/home.md'

export default function Home() {
  let { hero_title, hero_subtitle } = attributes
  return (
    <PageContainer title="Home">
      <Flex direction="column" p="5" textColor="white" border="2px">
        <Text fontSize="5xl">{hero_title}</Text>
        <Text fontSize="xl">{hero_subtitle}</Text>
      </Flex>
    </PageContainer>
  )
}
