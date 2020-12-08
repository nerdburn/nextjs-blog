import Head from 'next/head'
import Layout from '../components/layout'

export default function Custom404() {
	return (
		<Layout>
			<Head>
				<title>404 — Page Not Found</title>
			</Head>
			<h1>404 - Page Not Found</h1>
			<p>Sorry, this page cannot be found.</p>
		</Layout>
	)
}