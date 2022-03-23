import { ReactNode } from 'react'
import { ProductLine } from 'ui/components/ProductLine'
import { useBasket } from 'webshop/feature/basket/basket.slice'

type BasketLineProps = {
    id: string
    quantity: number
    name: string
    image: string
}

const BasketLine = ({quantity, id, name, image}: BasketLineProps) => {
  return <ProductLine image={image} id={id} name={name} quantity={quantity} />
}

type Props = {
  children: ReactNode
}

const BasketView = ({ children }: Props) => {
  return <div>{children}</div>
}

BasketView.Line = BasketLine

export { BasketView }
