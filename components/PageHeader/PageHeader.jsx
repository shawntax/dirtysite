import Head from 'next/head'
import { Heading } from '@chakra-ui/react'

const PageHeader = ({ children, ...props }) => {
  const { title, seoDesc } = props
  return (
    <>
      <Head>
        <title>{title} | Dirty Not Sorry</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={seoDesc} />
      </Head>
      {children && (
        <Heading as="h1" textTransform="capitalize" w="fit" py="4">
          {children}
        </Heading>
      )}
    </>
  )
}

export default PageHeader
