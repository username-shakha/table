import { HTMLAttributes, RefObject, useState } from 'react'
import './style.sass'

interface IInputProps extends HTMLAttributes<HTMLInputElement> {
    id: string
    label: string
    inputRef: RefObject<HTMLInputElement>
    formatPhoneNumber?: boolean
    // errorText?: string
}
//errorText,
function Input({ id, label, inputRef, formatPhoneNumber = false, ...props }: IInputProps) {
    const [phoneNumber, setPhoneNumber] = useState('')

    const handlePhoneInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputPhoneNumber = event.target.value.replace(/\D/g, '') // Удаляем все не цифры
        const formattedPhoneNumber = formatPhoneNumberInput(inputPhoneNumber)
        setPhoneNumber(formattedPhoneNumber) // Обновляем состояние
    }

    const formatPhoneNumberInput = (phoneNumber: string) => {
        // Форматируем номер телефона как +7(XXX)XXX-XX-XX
        const regex = /^(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/ // Регулярное выражение для учёта всех возможных комбинаций групп
        const formatted = phoneNumber.replace(regex, (_, p1, p2, p3, p4, p5) => {
            let formattedNumber = ''
            if (p1) formattedNumber += `+${p1}`
            if (p2) formattedNumber += `(${p2}`
            if (p3) formattedNumber += `)${p3}`
            if (p4) formattedNumber += `-${p4}`
            if (p5) formattedNumber += `-${p5}`
            return formattedNumber
        }) // Используем замену с функцией обратного вызова
        return formatted
    }

    //task regex fix
    return (
        <>
            {!formatPhoneNumber && (
                <div>
                    <label htmlFor={id}>{label}</label>
                    <div className="input-wrapper">
                        <input type="text" id={id} ref={inputRef} onChange={handlePhoneInputChange} {...props} />
                    </div>
                    {/* {errorText && <span style={{ color: 'red', fontStyle: 'italic' }}>{errorText}</span>} */}
                </div>
            )}

            {formatPhoneNumber && (
                <div>
                    <label htmlFor={id}>{label}</label>
                    <div className="input-wrapper">
                        <input
                            type="text"
                            value={phoneNumber}
                            ref={inputRef}
                            onChange={handlePhoneInputChange}
                            maxLength={16}
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default Input
