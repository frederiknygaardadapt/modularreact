type Props = {
  id: string
  brand: string
  name: string
  price: number
  image: string
  category: string
  sizes: size[]
  onAddToCart: () => void
}

type size = {
  value: number
  label: string
}

export const SingleProductView = ({
  id,
  brand,
  price,
  category,
  name,
  image,
  sizes,
  onAddToCart,
}: Props) => {
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
        <button onClick={onAddToCart}>Tilføj til kurv</button>
      </div>
    </>
  )
}
