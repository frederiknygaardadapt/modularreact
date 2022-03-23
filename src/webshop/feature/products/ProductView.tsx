import { useParams } from 'react-router-dom'
import { useGetProductBySlugQuery } from './products.query'

export const ProductView = () => {
  const { productSlug } = useParams()
  const { data } = useGetProductBySlugQuery(productSlug ?? '', {
    skip: !productSlug,
  })

  const { brand, category, name } = data?.product ?? {}

  return (
    <div>
      <h1>{name}</h1>
      <div>{brand}</div>
      <div>{category}</div>
    </div>
  )
}
