import { LoginForm } from 'webshop/feature/auth'
import { Container, Heading } from 'ui'

export const Login = () => {
  return (
    <Container spacing="md">
      <div>
        <Heading>Velkommen tilbage</Heading>
        <LoginForm />
      </div>
    </Container>
  )
}
