import withTwindApp from '@twind/next/app'
import twindConfig from '../twind.config'
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default withTwindApp(twindConfig,MyApp)
