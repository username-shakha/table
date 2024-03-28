import { HTMLAttributes, RefObject } from 'react'
import './style.sass'

interface IInputProps extends HTMLAttributes<HTMLInputElement> {
    id: string
    label: string
    inputRef: RefObject<HTMLInputElement>
    errorText?: string
}

function Input({ id, label, inputRef, errorText, ...props }: IInputProps) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <div className="input-wrapper">
                <input type="text" id={id} ref={inputRef} {...props} />
            </div>
            {errorText && <span style={{ color: 'red', fontStyle: 'italic' }}>{errorText}</span>}
        </div>
    )
}

export default Input
