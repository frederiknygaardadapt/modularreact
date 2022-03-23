import clsx from 'clsx'

type Props = {
  children: React.ReactElement

  containerSize?: 'sm' | 'md' | 'lg'
}

export const Container = ({ children, containerSize = 'sm' }: Props) => (
  <div
    className={clsx(
      'container',
      { 'grid grid-cols-3 gap-6': containerSize === 'md' },
      { 'grid grid-cols-2 gap-20': containerSize === 'lg' }
    )}
  >
    {children}
  </div>
)
