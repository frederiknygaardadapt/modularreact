import { FormHTMLAttributes } from 'react'

type Props = {
  children: React.ReactNode
} & FormHTMLAttributes<HTMLFormElement>

export const Form = ({ children, ...props }: Props) => {
  return (
    <form className="w-full" {...props}>
      {children}
    </form>
  )
}
