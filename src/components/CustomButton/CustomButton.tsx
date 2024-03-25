import { ReactNode, ButtonHTMLAttributes } from 'react'
import './style.sass'
interface ICustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'outlined' | 'contained'
    color?: 'error'
    children: ReactNode
}

export default function CustomButton({ variant, children, color, ...props }: ICustomButtonProps) {
    let classes = 'button-root'
    if (variant === 'outlined') classes += ` outlined`
    if (variant === 'contained') classes += ` contained`
    if (color === 'error') classes += ` error`
    return (
        <button {...props} className={classes}>
            {children}
        </button>
    )
}
