import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Profile from './profile'

export const siteTitle = 'Nerdburn'

export default function Layout({ children, home }) {
	return (
		<div className={styles.container}>
		
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Learn how to build a personal website using Next.js"
				/>
				<meta name="og:title" content={siteTitle} />
			</Head>
			
			<header className={styles.header}>
				{home && (<Profile />)}
			</header>
			
			<main>{children}</main>
			{!home && (
				<div className={styles.backToHome}>
					<Link href="/">
						<a>← Back to home</a>
					</Link>
				</div>
			)}
		</div>
	)
}