import { getLayout } from '@components/SiteLayout'
import { SimpleGrid, Center } from '@chakra-ui/react'
import Photo from '@components/Photo'
import { react as AboutContent } from '@content/pages/about.md'

export default function About() {
  return (
    <>
      <Center textColor="white" fontSize="3xl">
        <AboutContent />
      </Center>
      <SimpleGrid columns={{ base: 1, lg: 2 }} mt="4" spacing="8">
        <Photo
          fileName="group-acraze.jpg"
          height="100%"
          width="100%"
          alt="group"
        />
        <Photo fileName="group.jpg" height="100%" width="100%" alt="group" />
        <Photo fileName="group-2.jpg" height="100%" width="100%" alt="group" />
        <Photo fileName="group-4.jpg" height="100%" width="100%" alt="group" />
      </SimpleGrid>
    </>
  )
}
About.pageName = 'About'
About.getLayout = getLayout
