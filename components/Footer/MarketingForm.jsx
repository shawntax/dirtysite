import { useForm } from 'react-hook-form'
import axios from 'axios'
import { until } from '@open-draft/until'
import NCButton from '@components/NCButton'
import {
  Box,
  Flex,
  Container,
  Text,
  Heading,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
} from '@chakra-ui/react'

export default function MarketingForm() {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors, isSubmitSuccessful },
    setError,
  } = useForm({ mode: 'onSubmit', reValidateMode: 'onSubmit' })

  async function onSubmit(values) {
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      data: JSON.stringify(values),
    }

    let URL
    if (process.env.NODE_ENV === 'development') {
      URL = `http://localhost:3000/api/newsletter-signup`
    } else if (process.env.VERCEL_ENV === 'preview') {
      URL = `${process.env.VERCEL_URL}/api/newsletter-signup`
    } else {
      URL = `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/newsletter-signup`
    }

    const { error, data: res } = await until(() => axios(URL, options))

    if (error) {
      const {
        response: {
          data: { message: errorMessage },
        },
      } = error
      setError('email', { type: 'server', message: errorMessage })
    } else {
      const {
        data: {
          message: { name, email },
        },
      } = res
      console.log(`Signed up ${name} ${email}`)
    }
  }

  const NAME_REGEX = /^\b([A-ZÀ-ÿ-,a-z. ']+[ ]*)+$/

  const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i

  return (
    <Container
      as="main"
      maxW="container.lg"
      px={{ base: '4', md: '8' }}
      mb="10"
    >
      <Flex direction="column">
        <Heading as="h2" size="lg" mb="10">
          Join our Newsletter
        </Heading>
        {isSubmitSuccessful ? (
          <Text fontSize="2xl" mx="auto">
            Nice, you&#x27;re signed up!
          </Text>
        ) : (
          <Box w="full">
            <form onSubmit={handleSubmit(onSubmit)} name="marketing-newsletter">
              <Flex
                direction={{ base: 'column', sm: 'row' }}
                justify={{ base: 'flex-start', sm: 'center' }}
              >
                <FormControl w="2px">
                  <Input
                    type="text"
                    id="form_email"
                    name="username"
                    sx={{ display: 'none !important' }}
                    tabIndex="-1"
                    autoComplete="false"
                    {...register('username', { required: false })}
                  />
                </FormControl>
                <FormControl isInvalid={errors.name} maxW="20rem" px="4">
                  <FormLabel fontSize="xl" htmlFor="name" mb="-2">
                    First name
                  </FormLabel>
                  <Input
                    id="name"
                    type="text"
                    size="lg"
                    fontSize="2xl"
                    variant="flushed"
                    htmlSize={20}
                    {...register('name', {
                      required: {
                        value: true,
                        message: 'Give us a name, please!',
                      },
                      minLength: {
                        value: 2,
                        message: 'Name must be at least 2 characters',
                      },
                      maxLength: {
                        value: 20,
                        message: 'Name cannot be more than 20 characters',
                      },
                      pattern: {
                        value: NAME_REGEX,
                        message: 'Name contains invalid characters',
                      },
                    })}
                  />
                  <FormErrorMessage>
                    {errors.name && errors.name.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.email} maxW="30rem" px="4">
                  <FormLabel fontSize="xl" htmlFor="email" mb="-2">
                    Email
                  </FormLabel>
                  <Input
                    id="email"
                    type="email"
                    size="lg"
                    fontSize="2xl"
                    variant="flushed"
                    htmlSize={20}
                    {...register('email', {
                      required: {
                        value: true,
                        message: 'Give us an email, please!',
                      },
                      pattern: {
                        value: EMAIL_REGEX,
                        message: 'Invalid email address',
                      },
                    })}
                  />
                  <FormErrorMessage>
                    {errors.email && errors.email.message}
                  </FormErrorMessage>
                </FormControl>
                <NCButton
                  w="full"
                  maxW="15rem"
                  m="4"
                  isLoading={isSubmitting}
                  type="submit"
                >
                  Subscribe
                </NCButton>
              </Flex>
            </form>
          </Box>
        )}
      </Flex>
    </Container>
  )
}
