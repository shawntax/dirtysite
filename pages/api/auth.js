import { randomBytes } from 'node:crypto'
import { AuthorizationCode } from 'simple-oauth2'

const {
  OAUTH_CLIENT_ID = '',
  OAUTH_CLIENT_SECRET = '',
  OAUTH_HOST = 'https://github.com',
  OAUTH_TOKEN_PATH = '/login/oauth/access_token',
  OAUTH_AUTHORIZE_PATH = '/login/oauth/authorize',
} = process.env

const oauthConfig = Object.freeze({
  client: Object.freeze({
    id: OAUTH_CLIENT_ID,
    secret: OAUTH_CLIENT_SECRET,
  }),
  auth: Object.freeze({
    tokenHost: OAUTH_HOST,
    tokenPath: OAUTH_TOKEN_PATH,
    authorizePath: OAUTH_AUTHORIZE_PATH,
  }),
})

export default function auth(req, res) {
  const { host } = req.headers

  const authorizationCode = new AuthorizationCode(oauthConfig)

  const url = authorizationCode.authorizeURL({
    redirect_uri: `https://${host}/api/callback`,
    scope: `repo,user`,
    state: randomState(),
  })

  res.writeHead(301, { Location: url })
  res.end()
}

function randomState() {
  return randomBytes(6).toString('hex')
}
