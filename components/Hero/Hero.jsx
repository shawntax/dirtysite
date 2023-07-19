import { useEffect, useRef } from 'react'
import { Box, Image, Flex, Link } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { BiChevronDown } from 'react-icons/bi'

const R2_URL = 'https://pub-1bbe80e53d5f48258ba0b6492c380b75.r2.dev'

function Hero() {
  const videoRef = useRef()

  useEffect(() => {
    const promise = videoRef.current.play()

    if (promise !== undefined) {
      promise
        .catch(() => {
          // Auto-play was prevented
        })
        .then(() => {
          // Auto-play started
        })
    }
  }, [])

  return (
    <Box
      position="relative"
      direction="column"
      h="100vh"
      w="100vw"
      align="center"
      justify="center"
    >
      <Box
        opacity="0.50"
        overflow="hidden"
        pos="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
      >
        <video
          ref={videoRef}
          playsInline
          muted
          loop
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
          // poster=""
        >
          <source src={`${R2_URL}/habstrakt.webm`} type="video/webm" />
          <source src={`${R2_URL}/habstrakt.mp4`} type="video/mp4" />
        </video>
      </Box>

      <Box pos="relative" top={{ base: '30%', md: '40%' }}>
        <Image
          src="brand/logo-vert.svg"
          alt=""
          height={{ base: '32', lg: '56', xl: '60' }}
          width="auto"
        />
      </Box>
      <Flex
        w="full"
        justifyContent="center"
        alignItems="center"
        pos="absolute"
        bottom={{ base: '15%', md: '10%' }}
      >
        <Link href="#about">
          <motion.div
            animate={{ y: [0, 30, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              duration: 1,
              repeatDelay: 1,
            }}
          >
            <BiChevronDown size={50} color="white" />
          </motion.div>
        </Link>
      </Flex>
    </Box>
  )
}

export default Hero
