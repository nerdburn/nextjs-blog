import { useUser } from '../lib/useUser'

import Head from 'next/head'
import Link from 'next/link'

import Layout from '../components/layout'
import PostsList from '../components/posts-list'
import Spinner from '../components/spinner'

import utilStyles from '../styles/utils.module.scss'

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Index({allPostsData}) {
  const { user, session } = useUser()
  
  if (!user) {
    return (
      <Layout home>
        <Head>
          <title>Nerdburn</title>
        </Head>
        <p>Hi there!</p>
        <p>You are not signed in.</p>
      </Layout>
    )
  }

  return (
    <Layout home>
      <Head>
        <title>Nerdburn</title>
      </Head>
      <p>Oh hai 👋</p>
      <p>You're all signed in.</p>
      <section className={utilStyles.headingMd}>
        <p>Basically, I haven't coded anything in months, so I'm trying to learn Next to make myself feel better.</p>
      </section>
      
      <PostsList allPostsData={allPostsData} />
    </Layout>
  )
}