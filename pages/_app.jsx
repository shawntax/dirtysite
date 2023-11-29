import '@fontsource/oswald/500.css'
import '@fontsource/oswald/700.css'
import '@fontsource/darker-grotesque/500.css'
import '@fontsource/darker-grotesque/700.css'
import SiteLayout from '@components/SiteLayout'

function App({ Component, pageProps }) {
  const { pageName } = Component
  if (pageName === 'AdminPage') {
    return <Component {...pageProps} />
  } else {
    const getLayout =
      Component.getLayout || ((page) => <SiteLayout children={page} />)
    return getLayout(<Component {...pageProps} />)
  }
}

export default App
