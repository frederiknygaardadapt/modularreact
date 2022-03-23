import { FormEvent, useRef } from 'react'
import { useLoginMutation } from './auth.query'

export const LoginForm = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const [login, { data, error, isLoading }] = useLoginMutation()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const email = emailRef.current?.value
    const password = passwordRef.current?.value

    if (!email || !password) return

    login({ email, password })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input required ref={emailRef} id="email" name="email" type="email" placeholder="Email" />
      <label htmlFor="password">Password</label>
      <input
        required
        ref={passwordRef}
        id="password"
        name="password"
        type="password"
        placeholder="Password"
      />
      <button>Login</button>
      {/* @ts-ignore */}
      {error && <p className="text-red-700">{error.data.message}</p>}
    </form>
  )
}
