import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { supabase } from '../lib/db'

export default function Signup() {
	const { register, handleSubmit, watch, errors } = useForm()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const onSubmit = async (data) => {
		const { error, user } = await supabase.auth.signUp(data)
		if (!error && !user) alert('Check your email for the login link!') // TODO do something on success
		if (error) alert(error.message) // TODO do something on error
	}

	return (
		<Layout>
			<Head>
				<title>Sign up</title>
			</Head>
			
			<h1>Sign up</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<p>
					Full Name<br />
					<input name="fullName" placeholder="Full Name" ref={register({ required: true })} /><br />
					{errors.fullName && <span>This field is required</span>}
				</p>				
				<p>
					Email Address<br />
					<input name="email" placeholder="Email" ref={register({ required: true })}/><br />
					{errors.email && <span>This field is required</span>}
				</p>
				<p>
					Password<br />
					<input name="password" type="password" placeholder="Password" ref={register({ required: true })} /><br />
					{errors.password && <span>This field is required</span>}
				</p>
				<p><button type="submit">Sign up</button></p>
			</form>
			<p>Already signed up? <Link href="/login">Log in here</Link></p>
			
		</Layout>
	)
}