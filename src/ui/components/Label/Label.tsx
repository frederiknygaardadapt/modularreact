import { LabelHTMLAttributes } from 'react'

type Props = LabelHTMLAttributes<HTMLLabelElement>

export const Label = ({ children, ...props }: Props) => {
  return (
    <label className="mb-1" {...props}>
      {children}
    </label>
  )
}
