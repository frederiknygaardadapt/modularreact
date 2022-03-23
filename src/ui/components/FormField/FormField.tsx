type Props = {
  children: React.ReactNode
}

export const FormField = ({ children }: Props) => {
  return <div className="flex flex-col my-2 last:mb-6">{children}</div>
}
