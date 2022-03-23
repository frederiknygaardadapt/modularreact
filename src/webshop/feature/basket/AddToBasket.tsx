import { useDispatch } from 'react-redux'
import { RootState } from 'webshop/foundation/store'
import { addToBasket } from './basket.slice'

type Props = {
  productId: string
}

export function AddToBasket({ productId }: Props) {
  //   const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch()

  return <button onClick={() => dispatch(addToBasket({ id: productId }))}>Tilføj til kurv</button>
}
