const withPlugins = require('next-compose-plugins')
const withOptimizedImages = require('next-optimized-images')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    disableStaticImages: true,
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

module.exports = withPlugins(
  [
    [
      withOptimizedImages,
      {
        optimizeImagesInDev: false,
        handleImages: ['jpeg', 'jpg', 'png', 'webp'],
        removeOriginalExtension: true,
        responsive: {
          adapter: require('responsive-loader/sharp'),
        },
      },
    ],
  ],
  nextConfig
)
