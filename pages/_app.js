import { useUser } from '../lib/useUser'

import '../styles/global.scss'

export default function App({ Component, pageProps }) {
	const { user, session } = useUser()

	console.log('user', user)
	console.log('session', session)
	
	return (
		<Component {...pageProps} />
	)
}