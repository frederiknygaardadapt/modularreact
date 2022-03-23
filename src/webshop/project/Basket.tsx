import { useBasket } from "webshop/feature/basket/basket.slice"

export const Basket = () => {
    const basket = useBasket()

  return (
      <div>
          {
              basket.products.map(product => (
                    <div key={product.id}>{product.id}</div>
              ))
          }
      </div>
  )
}
