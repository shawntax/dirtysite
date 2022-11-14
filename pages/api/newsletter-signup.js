const axios = require('axios')
const safeAwait = require('safe-await')
const { checkEmail } = require('email-validator-node')

export default async function handler(req, res) {
  const { method } = req
  const { name, email, username } = req.body

  if (method === 'GET') {
    return res.status(405).end(`Method ${method} Not Allowed`)
  }

  if (username !== '') {
    return res.status(200).end('thanks, bot!')
  }

  const { isValid, message } = await checkEmail(email)

  if (!isValid) {
    console.log(message)
    return res.status(400).json({ message: 'Invalid email' })
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
    res.status(500).json({ message: error })
  }

  res.status(200).json({ message: { name, email } })
}
