import { SessionProvider } from "next-auth/react"
import '../styles/globals.css';
import Loader from '../component/loader';
import { Suspense } from 'react'
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Suspense fallback={Loader}>
        <Component {...pageProps} />
      </Suspense>
    </SessionProvider>
  )
}