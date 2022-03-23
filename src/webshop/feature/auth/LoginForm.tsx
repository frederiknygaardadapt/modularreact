import { FormEvent, useRef } from 'react'
import { useLoginMutation } from './auth.query'

import { Form } from 'ui/containers/Form/Form'
import { FormField } from 'ui/components/FormField/FormField'
import { Label } from 'ui/components/Label/Label'
import { Input } from 'ui/components/Input/Input'
import { Button } from 'ui/components/Button/Button'

import { Navigate } from 'react-router-dom'

export const LoginForm = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const [login, { error, isSuccess }] = useLoginMutation()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const email = emailRef.current?.value
    const password = passwordRef.current?.value

    if (!email || !password) return

    login({ email, password })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <FormField>
          <Label htmlFor="email">Email</Label>
          <Input
            required={true}
            ref={emailRef}
            id="email"
            name="email"
            type="email"
            placeholder="Email"
          />
        </FormField>
        <FormField>
          <Label htmlFor="password">Password</Label>
          <Input
            required
            ref={passwordRef}
            id="password"
            name="password"
            type="password"
            placeholder="Password"
          />
        </FormField>
      </div>
      <Button>Login</Button>
      {/* @ts-ignore */}
      {error && <p className="text-red-700">{error.data.message}</p>}
      {isSuccess && <Navigate replace to="/" />}
    </Form>
  )
}
