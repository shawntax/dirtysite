import React from 'react'
import { deepmerge } from '@fastify/deepmerge'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import NCLink from '@components/NCLink'
import { RxExternalLink } from 'react-icons/rx'
import { Heading } from '@chakra-ui/react'

const merge = deepmerge()

function MarkdownRenderer({ components, children, skipHtml = false }) {
  return (
    <Markdown
      components={components ? merge(components, elements) : elements}
      remarkPlugins={[remarkGfm]}
      children={children}
      skipHtml={skipHtml}
    />
  )
}

const defaults = {
  a: ({ href, children }) => {
    return (
      <NCLink
        href={href}
        target="_blank"
        rel="noopener"
        textDecoration="underline"
        textDecorationStyle="dotted"
        textDecorationColor="gray.400"
      >
        {children?.toString().toLowerCase()}
        <RxExternalLink style={{ display: 'inline', height: '13px' }} />
      </NCLink>
    )
  },

  heading: ({ node, children }) => {
    const sizes = ['2xl', 'xl', 'lg', 'md', 'sm', 'xs']
    const level = node?.tagName[1] ?? 1
    return (
      <Heading as={`h${level}`} size={sizes[`${level - 1}`]} my={2}>
        {children}
      </Heading>
    )
  },
}

const elements = {
  a: defaults.a,
  h1: defaults.heading,
  h2: defaults.heading,
  h3: defaults.heading,
  h4: defaults.heading,
  h5: defaults.heading,
  h6: defaults.heading,
}

export default MarkdownRenderer
