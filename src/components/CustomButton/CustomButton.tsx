import { ReactNode, ButtonHTMLAttributes } from 'react'
import './style.sass'
interface ICustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'outline' | 'rounded' | 'dashed' | 'double' | 'underlined'
    children: ReactNode
}

export default function CustomButton({ variant, children, ...props }: ICustomButtonProps) {
    let classes = ''
    if (variant === 'outline') classes += `outline`
    if (variant === 'rounded') classes += `rounded`
    if (variant === 'dashed') classes += `dashed`
    if (variant === 'double') classes += `double`
    if (variant === 'underlined') classes += `underlined`
    return (
        <button {...props} className={classes}>
            {children}
        </button>
    )
}
