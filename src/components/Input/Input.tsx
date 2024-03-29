import { HTMLAttributes, RefObject } from 'react'
import './style.sass'
import { formatPhoneNumberInput } from '@/utils'

interface IInputProps extends HTMLAttributes<HTMLInputElement> {
    id: string
    label: string
    inputRef: RefObject<HTMLInputElement>
    formatPhoneNumber?: boolean
    // errorText?: string
}
//errorText,
function Input({ id, label, inputRef, formatPhoneNumber = false, ...props }: IInputProps) {
    const handlePhoneInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (formatPhoneNumber && inputRef.current) {
            const inputPhoneNumber = event.target.value.replace(/\D/g, '') // Удаляем все не цифры
            const formattedPhoneNumber = formatPhoneNumberInput(inputPhoneNumber)
            inputRef.current.value = formattedPhoneNumber // Обновляем значение через ref
        }
    }

    return (
        <div>
            {!formatPhoneNumber ? (
                <>
                    <label htmlFor={id}>{label}</label>
                    <div className="input-wrapper">
                        <input type="text" id={id} ref={inputRef} {...props} />
                    </div>
                </>
            ) : (
                <>
                    <label htmlFor={id}>{label}</label>
                    <div className="input-wrapper">
                        <input type="text" ref={inputRef} onChange={handlePhoneInputChange} maxLength={16} />
                    </div>
                </>
            )}
        </div>
    )
}

export default Input
{
    /* {errorText && <span style={{ color: 'red', fontStyle: 'italic' }}>{errorText}</span>} */
}
