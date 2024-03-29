import React from 'react'

interface WithErrorTextProps {
    errorText?: string
}

const WithErrorText = <P extends object>(Component: React.ComponentType<P>) => {
    return ({ errorText, ...props }: WithErrorTextProps & P) => (
        <>
            <Component {...(props as P)} />
            {errorText && (
                <span
                    style={{
                        display: 'block',
                        textAlign: 'right',
                        color: 'red',
                        fontStyle: 'italic',
                        fontSize: '13px',
                    }}
                >
                    {errorText}
                </span>
            )}
        </>
    )
}

export default WithErrorText
