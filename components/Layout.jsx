import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Head from 'next/head'
import { useRouter } from 'next/router'
const Layout = ({children , ...customMeta}) => {
  const meta = {
    title: 'Welcome to Ngozi&#8216;s Africa website',
    description: 'Ngizi  Africa is a high-end health resort in Diani that specializes in Complementary and alternative medicine (CAM). ',
    type: 'website',
    ...customMeta
  }
  const router = useRouter()
  return (
    <>
      <Head>
        <title>
          {meta.title}
        </title>
        <meta name='robots' content='follow, index' />
        <meta content={meta.description} name='description' />

      
     <meta
          property="og:url"
          content={`https://www.ngoziafrica.co.ke${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://www.ngoziafrica.co.ke...${router.asPath}`}
        />


        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="ngoziafrica.co.ke" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mc_twitter" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter.description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.data && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
<Navbar/>
{children}
<Footer/>

    </>
  )
}

export default Layout