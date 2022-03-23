import { ProductCard } from 'ui/components/ProductCard'
import { Container } from 'ui/containers/Container/Container'
import { useGetProductsQuery } from './products.query'
import { Product } from './products.type'

export const Products = () => {
  const { data } = useGetProductsQuery()

  if (!data?.products) return null

  return (
    <Container containerSize="md">
      <>
        {data.products.map(({ id, slug, ...rest }: Product) => (
          <ProductCard {...rest} key={id} slug={`/products/${slug}`} />
        ))}
      </>
    </Container>
  )
}
