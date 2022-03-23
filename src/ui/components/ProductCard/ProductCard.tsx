import { ReactElement } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  brand: string
  name: string
  price: number
  image: string
  slug: string
}

export const ProductCard = ({ brand, name, price, image, slug }: Props): ReactElement => {
  return (
    <Link to={slug}>
      <img alt={name} src={image}></img>
      <div>{brand}</div>
      <div>{name}</div>
      <div>{price} kr.</div>
    </Link>
  )
}
