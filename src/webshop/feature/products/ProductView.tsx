import { useParams } from 'react-router-dom'
import { useGetProductBySlugQuery } from './products.query'

export const ProductView = () => {
  const { productSlug } = useParams()
  const { data } = useGetProductBySlugQuery(productSlug ?? '', {
    skip: !productSlug,
  })

  if (!data?.product) return null

  const { brand, category, name, image, sizes, price } = data.product

  return (
    <div className="container grid grid-cols-2 gap-20">
      <div>
        <img className="w-full" alt={name} src={image} />
      </div>
      <div>
        <div>{brand}</div>
        <h1 className="text-3xl">{name} - {category}</h1>
        <div>{price}</div>

        <select>
          {sizes?.map((size) => (
            <option key={size.value} value={size.value}>
              {size.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
