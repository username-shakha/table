import { HTMLAttributes, RefObject } from 'react'

interface IInputProps extends HTMLAttributes<HTMLInputElement> {
    id: string
    label: string
    inputRef: RefObject<HTMLInputElement>
}

function Input({ id, label, inputRef, ...props }: IInputProps) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <div>
                <input type="text" id={id} ref={inputRef} {...props} />
            </div>
        </div>
    )
}

export default Input
