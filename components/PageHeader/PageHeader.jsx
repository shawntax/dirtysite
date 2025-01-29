import Head from 'next/head'
import { useRouter } from 'next/router'
import { Heading } from '@chakra-ui/react'

const PageHeader = ({ children, ...props }) => {
  const { title, urlPath, imagePath, seoDesc } = props
  const { pathname } = useRouter()

  return (
    <>
      <Head>
        <title>{`${title} | Dirty Not Sorry`}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content={seoDesc || `Dirty Not Sorry Presents: ${title}`}
          key="sitedesc"
        />
        <meta property="og:type" content="website" />

        {/* Open Graph */}
        <meta
          property="og:url"
          content={`https://dirtynotsorry.com${urlPath || pathname}`}
          key="ogurl"
        />
        <meta
          property="og:image"
          content={`https://dirtynotsorry.com${imagePath ? `/media/${imagePath}` : `/brand/og.png`}`}
          key="ogimage"
        />
        <meta
          property="og:site_name"
          content={'Dirty Not Sorry'}
          key="ogsitename"
        />
        <meta
          property="og:title"
          content={title ? `${title} | Dirty Not Sorry` : 'Dirty Not Sorry'}
          key="ogtitle"
        />
        <meta
          property="og:description"
          content={seoDesc || `Dirty Not Sorry Presents: ${title}`}
          key="ogdesc"
        />
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
