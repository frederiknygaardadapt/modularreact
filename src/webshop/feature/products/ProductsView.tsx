import { ProductCard } from 'ui/components/ProductCard'
import { ProductGrid } from 'ui/containers/ProductGrid'
import { useGetProductsQuery } from './products.query'
import { Product } from './products.type'

export const ProductsView = () => {
  const { data } = useGetProductsQuery()

  if (!data?.products) return null

  return (
    <ProductGrid>
      {data.products.map(({ id, slug, ...rest }: Product) => (
        <ProductCard {...rest} key={id} slug={`/products/${slug}`} />
      ))}
    </ProductGrid>
  )
}
