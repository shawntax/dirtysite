const withPlugins = require('next-compose-plugins')
const withOptimizedImages = require('next-optimized-images')

const nextConfig = {
  images: {
    disableStaticImages: true,
  },
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
      options: { mode: ['react-component'] },
    })

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    config.module.rules.push({
      test: /\.mp4$/i,
      use: 'file-loader?name=videos/[name].[ext]',
    })

    return config
  },
}

module.exports = withPlugins(
  [
    [
      withOptimizedImages,
      {
        optimizeImagesInDev: true,
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
