import { AppProps } from 'next/app'
import '../styles/index.css'
import '@fortawesome/fontawesome-svg-core/styles.css' // import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core'

config.autoAddCss = false

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
