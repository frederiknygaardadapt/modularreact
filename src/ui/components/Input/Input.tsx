import { InputHTMLAttributes } from 'react'

type Props = {
  labelText: string
} & InputHTMLAttributes<HTMLInputElement>

export const Input = ({ labelText, ...rest }: Props) => {
  return (
    <div>
      <label>{labelText}</label>
      <input {...rest} />
    </div>
  )
}
