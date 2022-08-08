const axios = require('axios')
const safeAwait = require('safe-await')

require('dotenv').config()

exports.handler = async (event, context) => {
  const client = axios.create({
    baseURL: 'https://dirty-not-sorry.myshopify.com/admin/api/2022-07/',
    headers: {
      'X-Shopify-Access-Token': process.env.SHOPIFY_ADMIN_ACCESS_TOKEN,
    },
  })

  const [error, { data }] = await safeAwait(
    client.get('customers.json?limit=10')
  )

  if (error) {
    console.log(error)
    return {
      statusCode: 500,
      body: JSON.stringify({
        status: 'oops',
      }),
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      data,
    }),
  }
}
