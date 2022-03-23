import { useParams } from 'react-router-dom'
import { useGetProductBySlugQuery } from './products.query'
import { Container } from 'ui/containers/Container/Container'
import { SingleProductView } from 'ui/components/SingleProductView/SingleProductView'

export const ProductView = () => {
  const { productSlug } = useParams()
  const { data } = useGetProductBySlugQuery(productSlug ?? '', {
    skip: !productSlug,
  })

  if (!data?.product) return null

  const { id, brand, category, name, image, sizes, price } = data.product

  return (
    <Container containerSize="lg" spacing='md'>
        <SingleProductView id={id} brand={brand} category={category} name={name} image={image} sizes={sizes} price={price}/>
    </Container>
  )
}
