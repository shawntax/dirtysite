import { Box, Image, Flex, Link } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { BiChevronDown } from 'react-icons/bi'

function Hero() {
  return (
    <Box
      position="relative"
      direction="column"
      h="100vh"
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

      <Box pos="relative" top={{ base: '30%', md: '40%' }}>
        <Image
          src="brand/logo-vert.svg"
          alt=""
          height={{ base: '32', lg: '56', xl: '60' }}
        />
      </Box>
      <Flex
        w="full"
        justifyContent="center"
        alignItems="center"
        pos="absolute"
        bottom={{ base: '30%', md: '10%' }}
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
