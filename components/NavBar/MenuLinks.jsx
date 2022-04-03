import NextLink from 'next/link'
import { Box, Stack, Link, Text, Flex } from '@chakra-ui/react'
import { HiExternalLink } from 'react-icons/hi'
import { useRouter } from 'next/router'

const MenuItem = ({ children, to = '/', ...rest }) => {
  const router = useRouter()
  return (
    <NextLink href={to} passHref>
      <Link>
        <Text
          display="block"
          casing="uppercase"
          textDecoration={
            router.asPath === to ? 'overline wavy #2A4365' : 'initial'
          }
          {...rest}
        >
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
        fontSize={['md', 'md', 'lg', 'xl']}
      >
        <MenuItem to="/about">About</MenuItem>
        <MenuItem to="/artists">Artists</MenuItem>
        <MenuItem to="/events">Events</MenuItem>
        <MenuItem to="/contact">Contact</MenuItem>
        <MenuItem to="https://shop.dirtynotsorry.com">
          <Flex>
            <Text>Shop</Text>
            <HiExternalLink size="15px" />
          </Flex>
        </MenuItem>
      </Stack>
    </Box>
  )
}

export default MenuLinks
