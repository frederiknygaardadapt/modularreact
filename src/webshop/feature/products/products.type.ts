export type Product = {
  id: string
  slug: string
  brand: string
  name: string
  price: number
  description: string
  image: string
  category: string
  sizes: size[]
}

type size = {
    value: number
    label: string
}
