import { CSSProperties, ReactNode } from 'react'
//default styles and breakpoints //sass
import './Container.sass'

type TBreakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

type TContainerProps = {
    children: ReactNode
    className?: string
    maxWidth?: TBreakpoint
    disableGutters?: boolean
    style?: CSSProperties
}

export default function Container({ children, className, maxWidth, disableGutters = false, style }: TContainerProps) {
    let classes = `${className !== undefined ? `${className} ` : ''}default-root`

    if (maxWidth) classes += ` ${maxWidth}`

    if (disableGutters) classes += ' disable-gutters'
    else classes += ' enabled-gutters'

    return (
        <div className={classes} {...(style && { style })}>
            {children}
        </div>
    )
}
