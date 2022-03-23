import { ReactElement, ReactNode } from 'react'

type Props = {
  children: ReactNode;
}

export const ProductGrid = ({ children }: Props): ReactElement => {
  return (
      <div className="container grid grid-cols-3 gap-6">
        {children}
      </div>
  )
}
