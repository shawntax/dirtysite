import NextLink from 'next/link'
import { Link, Text } from '@chakra-ui/react'

const NCLink = ({ children, to = '/', ...rest }) => (
  <NextLink href={to} passHref>
    <Link>
      <Text {...rest}>{children}</Text>
    </Link>
  </NextLink>
)

export default NCLink
