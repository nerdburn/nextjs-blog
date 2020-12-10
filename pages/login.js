import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'

import { supabase } from '../lib/db'

export default function Login() {
	const { register, handleSubmit, watch, errors } = useForm()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const router = useRouter()

	const onSubmit = async (data) => {
		const { error, user } = await supabase.auth.signIn(data)
		// TODO - silent on success?
		if (!error) router.push("/")
		if (error) alert(error.message) // TODO - do something on error
	}
	
	// TODO - add some oauth providers
	async function handleOAuthLogin(provider) {
		let { error } = await supabase.auth.signIn({ provider })
		if (error) alert(error.message)
	}
	
	async function forgotPassword() {
		const email = prompt('Please enter your email:')
		if (email === null || email === '')
			return alert('You must enter your email.')
	
		const { error } = await supabase.auth.api.resetPasswordForEmail(email)
		if (error) return alert(error.message)
		alert('Password recovery email has been sent.')
	}

	return (
		<Layout>
			<Head>
				<title>Log In</title>
			</Head>
			
			<h1>Log In</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
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
				<p><button type="submit">Log in</button></p>
			</form>
			<p>Don't have an account? <Link href="/signup">Sign up instead</Link></p>
		</Layout>
	)
}