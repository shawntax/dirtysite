import PageContainer from '../components/PageContainer'
import { Center, Box, Grid, GridItem } from '@chakra-ui/react'
import NCImage from '../components/NCImage'
export default function About() {
  return (
    <PageContainer title="About">
      <Box minH="100vh">
        <Center textColor={'white'} fontSize={'6xl'}>
          WIP
        </Center>
        <Grid
          h="600"
          bg=""
          templateRows="repeat(12, 1fr)"
          templateColumns="repeat(6, 1fr)"
          gap={2}
          pb="10"
        >
          <GridItem rowSpan={[6]} colSpan={[6, 4, 2]} bg="">
            <NCImage
              src="/media/group-acraze.jpg"
              height="1000"
              width="1500"
              borderRadius="xl"
              quality={50}
              alt=""
            />
          </GridItem>
          <GridItem rowSpan={[3, 6]} colSpan={[3, 2]} bg="">
            <NCImage
              src="/media/group.jpg"
              height="1000"
              width="1500"
              borderRadius="xl"
              quality={50}
              alt=""
            />
          </GridItem>
          <GridItem rowSpan={[3, 6]} colSpan={[3, 2]} bg="">
            <NCImage
              src="/media/group-2.jpg"
              height="1000"
              width="1500"
              borderRadius="xl"
              quality={50}
              alt=""
            />
          </GridItem>
          <GridItem rowSpan={[6]} colSpan={[3]} bg="">
            <NCImage
              src="/media/group-3.jpg"
              height="900"
              width="1500"
              borderRadius="xl"
              quality={50}
              alt=""
            />
          </GridItem>
          <GridItem rowSpan={[6]} colSpan={[3]} bg="">
            <NCImage
              src="/media/group-4.jpg"
              height="900"
              width="1500"
              borderRadius="xl"
              quality={50}
              alt=""
            />
          </GridItem>
        </Grid>
      </Box>
    </PageContainer>
  )
}
