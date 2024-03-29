import { HTMLAttributes, RefObject } from 'react'
import './style.sass'

interface IInputProps extends HTMLAttributes<HTMLInputElement> {
    id: string
    label: string
    inputRef: RefObject<HTMLInputElement>
    // errorText?: string
}
//errorText,
function Input({ id, label, inputRef, ...props }: IInputProps) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <div className="input-wrapper">
                <input type="text" id={id} ref={inputRef} {...props} />
            </div>
            {/* {errorText && <span style={{ color: 'red', fontStyle: 'italic' }}>{errorText}</span>} */}
        </div>
    )
}

export default Input
