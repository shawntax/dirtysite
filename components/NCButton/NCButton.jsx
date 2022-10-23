import { Button, Text } from '@chakra-ui/react'

const NCButton = ({ children, ...props }) => {
  return (
    <Button
      size={props.size ?? 'lg'}
      px="8"
      borderRadius="full"
      bgColor="white"
      color="black"
      w="44"
      {...props}
      _hover={{
        bgColor: 'black',
        color: 'white',
        border: '2px solid white',
      }}
    >
      <Text
        fontSize={props.fontSize ?? 'xl'}
        casing="uppercase"
        fontWeight="bold"
      >
        {children}
      </Text>
    </Button>
  )
}

export default NCButton
