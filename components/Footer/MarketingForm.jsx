import { useForm } from 'react-hook-form'
import React from 'react'
import {
  Box,
  Heading,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from '@chakra-ui/react'

export default function MarketingForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        resolve()
      }, 3000)
    })
  }

  return (
    <Box>
      <Heading as="h2" size="xl">
        Newsletter
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.name}>
          <FormLabel fontSize="2xl" htmlFor="name">
            First name
          </FormLabel>
          <Input
            id="name"
            htmlSize={30}
            width="auto"
            {...register('name', {
              required: true,
              minLength: {
                value: 2,
                message: 'Name must be at least 2 characters',
              },
              maxLength: {
                value: 20,
                message: 'Name cannot be more than 20 characters',
              },
            })}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.email}>
          <FormLabel fontSize="2xl" htmlFor="email">
            Email
          </FormLabel>
          <Input
            id="email"
            htmlSize={30}
            width="auto"
            {...register('email', {
              required: true,
              pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
        <Button mt={4} color="black" isLoading={isSubmitting} type="submit">
          Submit
        </Button>
      </form>
    </Box>
  )
}
