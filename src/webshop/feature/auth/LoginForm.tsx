import { FormEvent, useRef } from 'react'
import { useLoginMutation } from './auth.query'

export const LoginForm = () => {
  const [login, { data, error, isLoading }] = useLoginMutation()

  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const email = emailRef.current?.value
    const password = passwordRef.current?.value

    if (!email || !password) return

    login({ email, password })
  }

  console.log(error)

  if (error && 'message' in error) {
    console.log(error.message)
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
    </form>
  )
}
