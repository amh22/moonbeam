import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const PageHead = ({ title, name, content }) => {
  const pageTitle = title || 'Subscan | Moonbeam Explorer Demo'

  const metaName = name || 'Subscan Moonbean Explorer Demo'

  const metaContent =
    content ||
    'Demo: Subscan | Substrate ecological explorer: Search, analyze, and visualize blockchain that occurs on the moonbeam Network, such as extrinsics, transfers, accounts, tokens, prices, staking, PLO and other activities.'

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name={metaName} content={metaContent} />
      <link rel='icon' href='/favicon.webp' />
    </Head>
  )
}

export default PageHead
