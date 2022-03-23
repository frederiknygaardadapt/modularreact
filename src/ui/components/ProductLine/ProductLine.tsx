import { Link } from "react-router-dom"

type Props = {
  id: string
  name: string
  quantity: number
  image: string
  slug: string
}

export const ProductLine = ({ id, name, quantity, image, slug }: Props) => {
  return (
    <div className="grid grid-flow-col">
      <Link to={`/products/${slug}`}>
        <img className="w-32" alt={name} src={image} />
      </Link>
      <div>{name}</div>
      <div>{quantity}</div>
    </div>
  )
}
