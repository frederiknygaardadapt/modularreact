type Props = {
  id: string
  name: string
  quantity: number
  image: string
}

export const ProductLine = ({ id, name, quantity, image }: Props) => {
  return (
    <div className="grid grid-flow-col">
      <div>
        <img className="w-32" alt={name} src={image} />
      </div>
      <div>{name}</div>
      <div>{quantity}</div>
    </div>
  )
}
