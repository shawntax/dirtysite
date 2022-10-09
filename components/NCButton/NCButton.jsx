import { Button, Text } from '@chakra-ui/react'

const NCButton = ({ children, ...props }) => {
  return (
    <Button
      size={props.size ?? 'lg'}
      px="8"
      borderRadius="full"
      bgColor="white"
      color="black"
      {...props}
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
