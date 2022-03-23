import { useDispatch } from 'react-redux'
import { AppDispatch } from 'webshop/foundation/store'
import { addToBasket } from './basket.slice'

type Props = {
  productId: string
}

export function AddToBasket({ productId }: Props) {
  const dispatch = useDispatch<AppDispatch>()

  return <button onClick={() => dispatch(addToBasket({ id: productId }))}>Tilføj til kurv</button>
}
