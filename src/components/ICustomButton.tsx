import { ReactNode, ButtonHTMLAttributes } from 'react'
interface ICustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export default function CustomButton({ children, ...props }: ICustomButtonProps) {
  return <button {...props}>{children}</button>
}
