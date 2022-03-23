import { Container } from 'ui/containers/Container'

import { useBasket, BasketView } from 'webshop/feature/basket'
import { useGetProductByIdQuery } from 'webshop/feature/products'

type Props = {
  id: string
  quantity: number
}

const BasketItem = ({ id, quantity }: Props) => {
  const { data } = useGetProductByIdQuery(id)
  if (!data) return <p>Loading...</p>
  return <BasketView.Line quantity={quantity} {...data.product} />
}

export const Basket = () => {
  const basket = useBasket()
  return (
    <Container spacing="md">
      <BasketView>
        {basket.products.map(({ id, quantity }) => (
          <BasketItem key={id} id={id} quantity={quantity} />
        ))}
      </BasketView>
    </Container>
  )
}
