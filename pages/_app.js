import { SessionProvider } from "next-auth/react"
import '../styles/globals.css'
import ErrorBoundary from '../components/ErrorBoundary'
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </SessionProvider>
  )
}