import { ReactNode, ButtonHTMLAttributes } from 'react'
import styles from './CustomButton.module.css'
interface ICustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'outline' | 'rounded' | 'dashed' | 'double' | 'underlined'
    children: ReactNode
}

export default function CustomButton({ variant, children, ...props }: ICustomButtonProps) {
    let buttonClasses = styles.button
    if (variant === 'outline') buttonClasses += ` ${styles.outline}`
    if (variant === 'rounded') buttonClasses += ` ${styles.rounded}`
    if (variant === 'dashed') buttonClasses += ` ${styles.dashed}`
    if (variant === 'double') buttonClasses += ` ${styles.double}`
    if (variant === 'underlined') buttonClasses += ` ${styles.underlined}`
    return (
        <button {...props} className={buttonClasses}>
            {children}
        </button>
    )
}
