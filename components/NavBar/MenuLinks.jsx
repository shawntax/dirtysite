import {
  Box,
  Center,
  Stack,
  Link,
  Text,
  Flex,
  ScaleFade,
} from '@chakra-ui/react'
import { HiExternalLink } from 'react-icons/hi'
import { useRouter } from 'next/router'
import NCLink from '@components/NCLink'
import { SiTwitch, SiFacebook, SiInstagram } from 'react-icons/si'

const MenuItem = ({ toggle, children, to = '/', ...rest }) => {
  const router = useRouter()
  return (
    <NCLink href={to} to={to} passHref onClick={toggle}>
      <Link>
        <Text
          // border={'1px solid white'}
          // boxShadow={'5px 8px white'}

          display="block"
          casing="uppercase"
          textDecoration={
            router.asPath === to ? 'underline wavy #2A4365' : 'initial'
          }
          {...rest}
        >
          {children}
        </Text>
      </Link>
    </NCLink>
  )
}

const MenuSocials = () => {
  return (
    <Center pb="5">
      <NCLink
        to="https://facebook.com/dirtynotsorry"
        target="_blank"
        px="5"
        color="gray.500"
      >
        <Box _hover={{ color: 'white' }}>
          <SiFacebook size="2rem" />
        </Box>
      </NCLink>
      <NCLink
        to="https://www.instagram.com/dirtynotsorry/"
        target="_blank"
        color="gray.500"
      >
        <Box _hover={{ color: 'white' }} px="5">
          <SiInstagram size="2rem" />
        </Box>
      </NCLink>
      <NCLink
        to="https://twitch.tv/dirtynotsorry"
        target="_blank"
        role="group"
        color="gray.500"
        px="5"
      >
        <Box _hover={{ color: 'white', boxShadow: 'light' }}>
          <SiTwitch size="2rem" />
        </Box>
      </NCLink>
    </Center>
  )
}

const MenuItemsDesktop = ({ toggle }) => {
  return (
    <>
      <MenuSocials />
      <Stack
        spacing={8}
        align="center"
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', '', '', '', 'row']}
        fontSize={['md', 'md', 'lg', 'xl']}
        bg=""
      >
        <MenuItem toggle={toggle} fontSize="2xl" to="/about">
          About
        </MenuItem>
        <MenuItem toggle={toggle} fontSize="2xl" to="/artists">
          Artists
        </MenuItem>

        <MenuItem
          toggle={toggle}
          fontSize="2xl"
          to="https://shop.dirtynotsorry.com"
        >
          <Flex>
            <Text>Shop</Text>
            <HiExternalLink size="15px" />
          </Flex>
        </MenuItem>
      </Stack>
    </>
  )
}

const MenuItemsMobile = ({ toggle }) => {
  return (
    <>
      <Stack
        spacing={8}
        align="center"
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', '', '', '', 'row']}
        fontSize={['md', 'md', 'lg', 'xl']}
        bg=""
      >
        <MenuItem toggle={toggle} fontSize="2xl" to="/about">
          About
        </MenuItem>
        <MenuItem toggle={toggle} fontSize="2xl" to="/artists">
          Artists
        </MenuItem>

        <MenuItem
          toggle={toggle}
          fontSize="2xl"
          to="https://shop.dirtynotsorry.com"
        >
          <Flex>
            <Text>Shop</Text>
            <HiExternalLink size="15px" />
          </Flex>
        </MenuItem>
        <MenuSocials />
      </Stack>
    </>
  )
}

const MenuLinks = ({ toggle, display, opacity, isLargerThan1280 }) => {
  return (
    <ScaleFade initialScale={0.4} in={toggle} bg="">
      <Box
        w="100%"
        h="100%"
        alignItems={'center'}
        bg=""
        top="35%"
        position="relative"
      >
        <Box
          display={{ base: display, xl: 'block' }}
          opacity={isLargerThan1280 ? 1 : opacity}
          transitionDuration={'700ms'}
        >
          {isLargerThan1280 ? (
            <MenuItemsDesktop toggle={toggle} />
          ) : (
            <MenuItemsMobile toggle={toggle} />
          )}
        </Box>
      </Box>
    </ScaleFade>
  )
}

export default MenuLinks
