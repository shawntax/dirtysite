import React from 'react'
import {
  Flex,
  Center,
  Link,
  Image,
  Text,
  useMediaQuery,
  Grid,
  GridItem,
} from '@chakra-ui/react'

const Footer = () => {
  const [isLargerThan601] = useMediaQuery('(min-width: 601px)')
  const [isSmallerThan600] = useMediaQuery('(max-width: 600px)')
  return (
    <>
      {isLargerThan601 ? (
        <Flex
          as="footer"
          justify="center"
          align="center"
          fontSize={{
            base: 'xs',
            md: 'lg',
          }}
          color="white"
          w="100%"
          py="8"
        >
          <Center>
            <Link href="https://twitch.tv/dirtynotsorry">
              <Image
                _hover={{
                  filter: 'brightness(30%)',
                }}
                src="../twitch.svg"
                h="10"
                boxSize="50px"
                alt="twitch"
                m="5"
              />
            </Link>
            <Link href="https://soundcloud.com/dirtynotsorry">
              <Image
                _hover={{
                  filter: 'brightness(30%)',
                }}
                src="../soundcloud.svg"
                h="10"
                boxSize="50px"
                alt="soundcloud"
                m="5"
              />
            </Link>
            <Link href="https://mixcloud.com/dirtynotsorry">
              <Image
                _hover={{
                  filter: 'brightness(30%)',
                }}
                src="../mixcloud.svg"
                h="10"
                boxSize="50px"
                alt="mixcloud"
                m="5"
              />
            </Link>
            <Link href="https://facebook.com/dirtynotsorry">
              <Image
                _hover={{
                  filter: 'brightness(30%)',
                }}
                src="../facebook.svg"
                h="10"
                boxSize="50px"
                alt="facebook"
                m="5"
              />
            </Link>
            <Link href="https://instagram.com/dirtynotsorry">
              <Image
                _hover={{
                  filter: 'brightness(30%)',
                }}
                src="../instagram.svg"
                h="10"
                boxSize="50px"
                alt="insta"
                m="5"
              />
            </Link>
            <Link href="https://twitter.com/dirtynotsorry">
              <Image
                _hover={{
                  filter: 'brightness(30%)',
                }}
                src="../twitter.svg"
                h="10"
                boxSize="50px"
                alt="twitter"
                m="5"
              />
            </Link>
          </Center>
        </Flex>
      ) : (
        <></>
      )}

      {isSmallerThan600 ? (
        <Grid
          templateColumns="repeat(2, 1fr)"
          templateRows="repeat(3, 1fr)"
          bg=""
        >
          <GridItem rowSpan={[3]} colSpan={[1]} mr="5">
            <Link href="https://instagram.com/dirtynotsorry">
              <Image
                src="../twitch.svg"
                h="10"
                boxSize="50px"
                alt="twitch"
                m="5"
              />
            </Link>
            <Link href="https://soundcloud.com/dirtynotsorry">
              <Image
                src="../soundcloud.svg"
                h="10"
                boxSize="50px"
                alt="soundcloud"
                m="5"
              />
            </Link>
            <Link href="https://mixcloud.com/dirtynotsorry">
              <Image
                src="../mixcloud.svg"
                h="10"
                boxSize="50px"
                alt="mixcloud"
                m="5"
              />
            </Link>
          </GridItem>
          <GridItem rowSpan={[3]} colSpan={[1]} ml="5">
            <Link href="https://facebook.com/dirtynotsorry">
              <Image
                src="../facebook.svg"
                h="10"
                boxSize="50px"
                alt="facebook"
                m="5"
              />
            </Link>
            <Link href="https://instagram.com/dirtynotsorry">
              <Image
                src="../instagram.svg"
                h="10"
                boxSize="50px"
                alt="insta"
                m="5"
              />
            </Link>
            <Link href="https://twitter.com/dirtynotsorry">
              <Image
                src="../twitter.svg"
                h="10"
                boxSize="50px"
                alt="twitter"
                m="5"
              />
            </Link>
          </GridItem>
        </Grid>
      ) : (
        <></>
      )}

      <Text pb="20" color="white">
        © 2022 Dirty Not Sorry
      </Text>
    </>
  )
}

export default Footer
