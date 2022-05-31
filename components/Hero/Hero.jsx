import { Box } from '@chakra-ui/react'

function Hero() {
  return (
    <Box
      position="relative"
      direction="column"
      h={{ base: '26rem', lg: '100vh' }}
      w="100vw"
      align="center"
      justify="center"
    >
      <Box opacity="0.50" overflow="hidden">
        <video
          webkit-playsInline
          playsInline
          autoPlay
          muted
          loop
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
        >
          <source src="/media/background-video.mp4" />
        </video>
      </Box>
    </Box>
  )
}

export default Hero
