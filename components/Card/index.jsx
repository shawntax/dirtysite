import React, { useState } from 'react'
import { Box, Image, Center, Link } from '@chakra-ui/react'

const Card = (props) => {
  const { djname, bio, instaLink, fbLink, scLink } = props

  return (
    <Box bg="gray.700" borderRadius="lg" px="4" py="5">
      <Image mx="auto" pt="2" borderRadius="full" src="group.jpg" alt="group" />
      <Box px="15%">
        <Box bg="black" mx="auto" w="auto" pb="1" mt="4" borderRadius="full">
          <Center textColor="white" fontSize="x-large">
            {djname}
          </Center>
        </Box>
      </Box>
      <Center px="6" py="3" textColor="white">
        {bio}
      </Center>
      <Box d="flex" justifyContent="center">
        <Link href={'https://instagram.com/' + instaLink}>
          {' '}
          <Image src="instagram.svg" h="10" mx="3" />{' '}
        </Link>{' '}
        <Link href={'https://facebook.com/' + fbLink}>
          {' '}
          <Image src="facebook.svg" h="10" mx="3" />{' '}
        </Link>{' '}
        <Link href={'https://soundcloud.com/' + scLink}>
          {' '}
          <Image src="soundcloud.svg" h="10" mx="3" />{' '}
        </Link>
      </Box>
    </Box>
  )
}

export default Card
