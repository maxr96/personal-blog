import { AppProps } from 'next/app'
import '../styles/index.css'
import '@fortawesome/fontawesome-svg-core/styles.css' // import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core'
import { ThemeProvider } from 'next-themes'

config.autoAddCss = false

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
