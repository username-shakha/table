import { ReactNode, ButtonHTMLAttributes } from 'react'
import './style.sass'
interface ICustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'outlined' | 'contained'
    children: ReactNode
}

export default function CustomButton({ variant, children, ...props }: ICustomButtonProps) {
    let classes = 'button-root'
    if (variant === 'outlined') classes += ` outlined`
    if (variant === 'contained') classes += ` contained`
    return (
        <button {...props} className={classes}>
            {children}
        </button>
    )
}
