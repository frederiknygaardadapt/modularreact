import { ProductsView } from 'webshop/feature/products'
import { Container, Heading } from 'ui'

export const Products = () => {
  return (
    <Container spacing="md">
      <>
        <Heading>Se vores fine produkter</Heading>
        <ProductsView />
      </>
    </Container>
  )
}
