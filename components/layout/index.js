import Head from 'next/head'
import styles from './layout.module.scss'
import utilStyles from '../../styles/utils.module.scss'
import Link from 'next/link'
import Avatar from '../avatar'

import { supabase } from '../../lib/db'
import { useUser } from '../../lib/useUser'

export default function Layout({ children, home }) {
	const { user, session } = useUser()
	
	return (
		<div className={styles.container}>
		
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="og:title" content="Nerdburn" />
			</Head>
			
			<header className={styles.header}>
				<div className={styles.headerLogo}>
					<h1><Link href="/">Nerdburn</Link></h1>
				</div>
				<div className={styles.headerMenu}>
					<ul>
						{ !user && <li><Link href="/signup">Sign up</Link></li>}
						{ !user && <li><Link href="/login">Log in</Link></li>}
						{ user && <li>{user.email} - <a onClick={() => supabase.auth.signOut()}>Log out</a></li>}
						{ user && <li><Avatar /></li>}
					</ul>
				</div>
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