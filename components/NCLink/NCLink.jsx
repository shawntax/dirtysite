import NextLink from 'next/link'
import { Link, Text } from '@chakra-ui/react'

const NCLink = ({ children, to = '/', target, ...rest }) => (
  <NextLink href={to} passHref>
    <Link {...rest} target={target}>
      <Text {...rest}>{children}</Text>
    </Link>
  </NextLink>
)

export default NCLink
