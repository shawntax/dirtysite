import React from 'react'
import { useForm } from 'react-hook-form'
import qs from 'qs'
import axios from 'axios'
import safeAwait from 'safe-await'

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
    formState: { isSubmitting, errors },
  } = useForm()

  async function onSubmit(values) {
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify({ 'form-name': 'marketing-newsletter', ...values }),
    }

    const [error, data] = await safeAwait(axios('/', options))

    if (error) {
      console.error(error.message)
    } else {
      console.log(data)
    }
  }

  return (
    <Box>
      <Heading as="h2" size="xl">
        Newsletter
      </Heading>
      <form
        onSubmit={handleSubmit(onSubmit)}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        name="marketing-newsletter"
      >
        <input type="hidden" name="form-name" value="marketing-newsletter" />
        <label hidden>
          bots only:
          <Input type="hidden" name="bot-field" />
        </label>
        <FormControl isInvalid={errors.name}>
          <FormLabel fontSize="2xl" htmlFor="name">
            First name
          </FormLabel>
          <Input
            id="name"
            type="text"
            size="lg"
            htmlSize={10}
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
            type="email"
            size="lg"
            htmlSize={20}
            width="auto"
            {...register('email', {
              required: true,
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Invalid email address',
              },
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
