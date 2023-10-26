import { AuthorizationCode } from 'simple-oauth2'
import dedent from 'dedent'

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

export default async function callback(req, res) {
  try {
    const code = req.query.code
    const { host } = req.headers

    const authorizationCode = new AuthorizationCode(oauthConfig)

    const accessToken = await authorizationCode.getToken({
      code,
      redirect_uri: `https://${host}/api/callback`,
    })

    console.debug('callback host=%o', host)

    const { token } = authorizationCode.createToken(accessToken)

    res.setHeader('Content-Type', 'text/html')

    res.status(200).send(
      renderResponse('success', {
        token: token.token.access_token,
        provider: 'github',
      })
    )
  } catch (e) {
    res.status(200).send(renderResponse('error', e))
  }
}

function renderResponse(status, content) {
  return dedent`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Authorizing ...</title>
    </head>
    <body>
      <p id="message"></p>
      <script>
        // Output a message to the user
        function sendMessage(message) {
          document.getElementById("message").innerText = message;
          document.title = message
        }

        // Handle a window message by sending the auth to the "opener"
        function receiveMessage(message) {
          console.debug("receiveMessage", message);
          window.opener.postMessage(
            'authorization:github:${status}:${JSON.stringify(content)}',
            message.origin
          );
          window.removeEventListener("message", receiveMessage, false);
          sendMessage("Authorized, closing ...");
        }

        sendMessage("Authorizing ...");
        window.addEventListener("message", receiveMessage, false);

        console.debug("postMessage", "authorizing:github", "*")
        window.opener.postMessage("authorizing:github", "*");
      </script>
    </body>
  </html>
  `
}
