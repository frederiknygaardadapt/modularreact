import { ReactNode } from 'react'
import { ProductLine } from 'ui/components/ProductLine'

type BasketLineProps = {
    id: string
    quantity: number
    name: string
    image: string
    slug: string
}

const BasketLine = ({slug, quantity, id, name, image}: BasketLineProps) => {
  return <ProductLine slug={slug} image={image} id={id} name={name} quantity={quantity} />
}

type Props = {
  children: ReactNode
}

const BasketView = ({ children }: Props) => {
  return <div>{children}</div>
}

BasketView.Line = BasketLine

export { BasketView }
