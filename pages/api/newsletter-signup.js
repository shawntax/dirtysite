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
    const {
      response: {
        data: { errors },
      },
    } = error

    console.log(errors)

    if (errors.email && errors.email[0].includes('taken')) {
      return res
        .status(422)
        .json({ message: 'This email is already subscribed' })
    }
    return res.status(500).json({ message: 'Something went wrong' })
  }

  return res.status(200).json({ message: { name, email } })
}
