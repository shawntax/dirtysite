const axios = require('axios')
const safeAwait = require('safe-await')
const { checkEmail } = require('email-validator-node')

require('dotenv').config()

exports.handler = async (event, context) => {
  const { name, email, username } = JSON.parse(event.body)

  if (event.httpMethod === 'GET') {
    return {
      statusCode: 405,
    }
  }

  if (username !== '') {
    return {
      statusCode: 200,
      body: 'thanks, bot!',
    }
  }

  const { isValid, message } = await checkEmail(email)

  if (!isValid) {
    console.log(message)
    return {
      statusCode: 400,
      body: `Invalid email`,
    }
  }

  const client = axios.create({
    baseURL: 'https://dirty-not-sorry.myshopify.com/admin/api/2022-07/',
    headers: {
      'X-Shopify-Access-Token': process.env.SHOPIFY_ADMIN_ACCESS_TOKEN,
    },
  })

  const [error, data] = await safeAwait(
    client.post('customers.json', {
      customer: {
        email,
        first_name: name,
        email_marketing_consent: {
          state: 'subscribed',
          opt_in_level: 'single_opt_in',
        },
        verified_email: true,
        tags: 'newsletter',
      },
    })
  )

  if (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ name, email }),
  }
}
