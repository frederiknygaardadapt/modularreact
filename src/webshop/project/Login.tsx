import { LoginForm } from 'webshop/feature/auth'
import { Container } from 'ui/containers/Container/Container'
import { Heading } from 'ui/components/Heading/Heading'

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
