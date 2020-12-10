import Link from 'next/link'

import styles from './avatar.module.scss'

export default function Avatar() {
	
	const userProfile = {
		id: 1,
		name: "Shawn Adrian",
		slug: "shawn-adrian",
		photoUrl: "https://pbs.twimg.com/profile_images/1138638265337040896/66VSV9Mm_400x400.png"
	}	
	
	return (
		<div className={styles.avatar}><img src={userProfile.photoUrl} /></div>
	)
}