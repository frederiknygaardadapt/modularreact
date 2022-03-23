import { ProductView } from 'webshop/feature/products'
import { addToBasket } from 'webshop/feature/basket'

export const Product = () => {
  return (
    <div>
      <ProductView addToBasket={addToBasket} />
    </div>
  )
}
