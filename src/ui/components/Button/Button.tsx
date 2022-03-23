import { ButtonHTMLAttributes } from 'react'

type Props = {} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children }: Props) => {
  return (
    <button className="bg-gray-800 rounded text-slate-50 text-sm py-3 px-6 font-bold">
      {children}
    </button>
  )
}
