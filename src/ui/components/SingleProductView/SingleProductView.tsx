import { useDispatch } from "react-redux"
import { AddToBasket } from "webshop/feature/basket/AddToBasket"

type Props = {
    id: string
    brand: string
    name: string
    price: number
    image: string
    category: string
    sizes: size[]
}

type size = {
    value: number
    label: string
}

export const SingleProductView = ({ id, brand, price, category, name, image, sizes }: Props) => {

    const dispatch = useDispatch()

  return (
    <>
      <div>
        <img className="w-full" alt={name} src={image} />
      </div>
      <div>
        <div>{brand}</div>
        <h1 className="text-3xl">
          {name} - {category}
        </h1>
        <div>{price}</div>

        <select>
          {sizes?.map((size) => (
            <option key={size.value} value={size.value}>
              {size.label}
            </option>
          ))}
        </select>
        <AddToBasket productId={id} />
      </div>
    </>
  )
}
