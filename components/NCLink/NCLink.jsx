import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'

const NCLink = ({ children, to = '/', target, ...rest }) => (
  <NextLink href={to} passHref>
    <Link {...rest} target={target}>
      {children}
    </Link>
  </NextLink>
)

export default NCLink
