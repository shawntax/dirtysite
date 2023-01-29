import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'

const NCLink = ({ children, to = '/', target, ...rest }) => (
  <Link as={NextLink} href={to} target={target} {...rest}>
    {children}
  </Link>
)

export default NCLink
