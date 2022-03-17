import React from 'react'
import NextLink from 'next/link'
import { Box, Stack, Link, Text } from '@chakra-ui/react'

const MenuItem = ({ children, to = '/', ...rest }) => {
  return (
    <NextLink href={to} passHref>
      <Link>
        <Text display="block" {...rest}>
          {children}
        </Text>
      </Link>
    </NextLink>
  )
}

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/about">About</MenuItem>
        <MenuItem to="/artists">Artists</MenuItem>
        <MenuItem to="/events">Events</MenuItem>
        <MenuItem to="/contact">Contact</MenuItem>
        <MenuItem to="https://shop.dirtynotsorry.com">Shop</MenuItem>
      </Stack>
    </Box>
  )
}

export default MenuLinks
