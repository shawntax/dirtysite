import Head from 'next/head'
import { useRouter } from 'next/router'
import { Heading } from '@chakra-ui/react'

const PageHeader = ({ children, ...props }) => {
  const { title, seoDesc } = props
  const { pathname } = useRouter()

  const ogImage =
    'https://res.cloudinary.com/dgkrvtqpg/image/upload/w_1200,h_630,f_auto,q_auto/v1666543549/og'

  return (
    <>
      <Head>
        <title>{title} | Dirty Not Sorry</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={seoDesc} key="sitedesc" />
        <link rel="canonical" href="https://dirtynotsorry.com" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content={'dirtynotsorry'} key="twhandle" />
        {/* Open Graph */}
        <meta
          property="og:url"
          content={`https://dirtynotsorry.com${pathname}`}
          key="ogurl"
        />
        <meta property="og:image" content={ogImage} key="ogimage" />
        <meta
          property="og:site_name"
          content={'Dirty Not Sorry'}
          key="ogsitename"
        />
        <meta property="og:title" content="Dirty Not Sorry" key="ogtitle" />
        <meta property="og:description" content={seoDesc} key="ogdesc" />
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
