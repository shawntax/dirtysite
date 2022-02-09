import PageContainer from '../components/PageContainer'
import {
  Container,
  Text,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
export default function Contact() {
  return (
    <PageContainer title="Contact">
      <Container>
        <Text textColor={'white'} fontSize="2xl" pb="4">
          Join the DNS Family
        </Text>
        <FormLabel textColor={'white'}>Email</FormLabel>
        <Input textColor={'white'}></Input>
        <FormLabel textColor={'white'}>Phone</FormLabel>
        <Input textColor={'white'}></Input>
      </Container>
    </PageContainer>
  )
}
