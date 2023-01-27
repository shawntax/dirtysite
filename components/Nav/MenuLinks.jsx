import { Stack, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import NCLink from '@components/NCLink'

const MenuItem = ({ children, to = '/', ...rest }) => {
  const router = useRouter()
  return (
    <NCLink to={to}>
      <Text
        display="block"
        casing="uppercase"
        _hover={{
          textDecoration: 'none',
          fontWeight: 'bold',
        }}
        textDecoration={
          router.asPath.includes(to) ? 'underline #FFF' : 'initial'
        }
        fontWeight={router.asPath.includes(to) ? 'bold' : 'normal'}
        {...rest}
      >
        {children}
      </Text>
    </NCLink>
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
