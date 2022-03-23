import { HTMLAttributes } from 'react'

type Props = {
  children: React.ReactNode
} & HTMLAttributes<HTMLHeadingElement>

export const Heading = ({ children, ...props }: Props) => {
  return (
    <h1 className="text-[30px]" {...props}>
      {children}
    </h1>
  )
}
