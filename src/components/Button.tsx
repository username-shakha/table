import { CSSProperties, ReactNode } from 'react'

type TButtonProps = {
  children: ReactNode
  style?: CSSProperties
}

export default function Button({ children, style }: TButtonProps) {
  return <button style={style}>{children}</button>
}
