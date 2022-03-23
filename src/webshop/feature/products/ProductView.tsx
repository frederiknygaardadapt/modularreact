import { useParams } from 'react-router-dom'
import { useGetProductBySlugQuery } from './products.query'
import { Container } from 'ui/containers/Container/Container'
import { SingleProductView } from 'ui/components/SingleProductView/SingleProductView'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

type Props = {
  addToBasket: ActionCreatorWithPayload<
    {
      id: string
      quantity?: number | undefined
    },
    string
  >
}

export const ProductView = ({ addToBasket }: Props) => {
  const { productSlug } = useParams()

  const dispatch = useDispatch()

  const { data } = useGetProductBySlugQuery(productSlug ?? '', {
    skip: !productSlug,
  })

  if (!data?.product) return null

  const { id, brand, category, name, image, sizes, price } = data.product

  return (
    <Container containerSize="lg" spacing="md">
      <SingleProductView
        id={id}
        brand={brand}
        category={category}
        name={name}
        image={image}
        sizes={sizes}
        price={price}
        onAddToCart={() => {
          dispatch(addToBasket({ id }))
        }}
      />
    </Container>
  )
}
