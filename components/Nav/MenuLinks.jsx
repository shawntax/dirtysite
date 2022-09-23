import NextLink from 'next/link'
import { Stack, Link, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const MenuItem = ({ children, to = '/', ...rest }) => {
  const router = useRouter()

  return (
    <NextLink href={to} passHref>
      <Link
        _hover={{
          textDecoration: 'none',
          fontWeight: 'bold',
        }}
      >
        <Text
          display="block"
          casing="uppercase"
          // transform={router.asPath.includes(to) ? 'scale(1.2)' : 'scale(1)'}
          textDecoration={
            router.asPath.includes(to) ? 'line-through #FFF' : 'initial'
          }
          fontWeight={router.asPath.includes(to) ? 'bold' : 'normal'}
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
    <Stack
      spacing="6"
      py={{ base: '4', md: 'none' }}
      display={{ base: isOpen ? 'flex' : 'none', lg: 'flex' }}
      align="center"
      justify={{ base: 'space-evenly', xl: 'flex-end' }}
      direction={{ base: 'column', lg: isOpen ? 'column' : 'row', xl: 'row' }}
      fontSize={{ base: isOpen ? '2xl' : 'lg', lg: '2xl' }}
    >
      <MenuItem to="/about">About</MenuItem>
      <MenuItem to="/artists">Artists</MenuItem>
      <MenuItem to="/events">Events</MenuItem>
      <MenuItem to="https://shop.dirtynotsorry.com">Shop</MenuItem>
    </Stack>
  )
}

export default MenuLinks
