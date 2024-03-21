import { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
}

export default function Container({ children }: ContainerProps) {
  return <div style={{ width: '1400px', margin: '0 auto' }}>{children}</div>
}
