import { SWRConfig } from 'swr'
import { client } from '../lib/client'
import Layout from '../components/Layout'
import '../styles/globals.css'

const fetcher = (query, variables) => client.request(query, variables)

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  )
}

export default MyApp
