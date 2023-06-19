const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    esmExternals: true,
  },
  async headers() {
    return [
      {
        source: '/media/background-video.*',

        headers: [
          {
            key: 'Cache-Control',
            value: 'max-age=31536000',
          },
        ],
      },
    ]
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      type: 'asset',
      use: 'svgo-loader',
    })

    config.module.rules.push({
      test: /\.mp4$/i,
      type: 'asset/resource',
      generator: {
        filename: 'videos/[name].[ext]',
      },
    })

    config.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
      options: { mode: ['react-component'] },
    })

    return config
  },
}

module.exports = nextConfig
