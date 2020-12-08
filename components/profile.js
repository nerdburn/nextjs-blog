import useSWR from 'swr'
import styles from './profile.module.css'
import Spinner from './spinner'
import utilStyles from '../styles/utils.module.css'

const fetcher = (...args) => fetch(...args).then(res => res.json())

function useProfile() {
	const { data, error } = useSWR('https://randomuser.me/api/', fetcher)
	return {
		profile: (data ? data.results[0] : data), // if any data, return the first one
		isLoading: !error && !data,
		isError: error
	}
}

export default function Profile() {
	const { profile, isLoading, isError } = useProfile()
	console.log('result:', profile)
	
	if (isLoading || isError) return <Spinner />

	return (
		<>
			<img src={profile.picture.medium} className={`${styles.profileHomeImage} ${utilStyles.borderCircle}`} />
			<h1 className={utilStyles.heading2Xl}>{profile.name.first} {profile.name.last}</h1>
		</>
	)
}