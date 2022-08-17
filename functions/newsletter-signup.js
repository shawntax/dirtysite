const axios = require('axios')
const safeAwait = require('safe-await')

require('dotenv').config()

exports.handler = async (event, context) => {
  const submission = JSON.parse(event.body)

  console.log(submission)

  // const client = axios.create({
  // baseURL: 'https://dirty-not-sorry.myshopify.com/admin/api/2022-07/',
  // headers: {
  // 'X-Shopify-Access-Token': process.env.SHOPIFY_ADMIN_ACCESS_TOKEN,
  // },
  // })

  return {
    statusCode: 200,
    body: JSON.stringify(submission),
  }
}
