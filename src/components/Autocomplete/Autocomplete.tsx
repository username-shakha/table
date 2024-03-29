import { ChangeEvent, RefObject, useEffect, useMemo, useState } from 'react'
//ChangeEvent
import './style.sass'
import { ClearIcon, DownIcon, UpIcon } from '../icons'

interface IAutocompleteProps {
    options: string[]
    selectOption: (val: string) => void
    inputRef: RefObject<HTMLInputElement>
    title: string
    // errorText?: string
}

//errorText
function Autocomplete({ options, selectOption, inputRef, title }: IAutocompleteProps) {
    const [inputValue, setInputValue] = useState('')
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
        setIsOpen(true)
    }

    const handleOptionClick = (option: string) => {
        setInputValue(option)
        selectOption(option)
        setIsOpen(false)
    }

    const optionList = useMemo(() => {
        return options.filter((option) => option.toLowerCase().includes(inputValue.toLowerCase()))
    }, [options, inputValue])

    useEffect(() => {
        const handleMouseDown = () => {
            setIsOpen(false)
        }

        document.addEventListener('mousedown', handleMouseDown)

        return () => {
            document.removeEventListener('mousedown', handleMouseDown)
        }
    }, [])

    useEffect(() => {
        if (inputRef.current) {
            setInputValue(inputRef.current.value)
        }
    }, [inputRef])

    return (
        <div className="autocomplete">
            <label htmlFor="autocomplete">{title ? title : 'Выберите параметры'}</label>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onFocus={() => setIsOpen(true)}
                ref={inputRef}
                placeholder="Select Option"
                onMouseDown={(e) => e.stopPropagation()}
            />

            {inputValue && (
                <div className="cycle_wrapper clear" onClick={() => setInputValue('')}>
                    <ClearIcon />
                </div>
            )}

            <div className="cycle_wrapper" onClick={() => setIsOpen((prev) => !prev)}>
                {isOpen ? <UpIcon /> : <DownIcon />}
            </div>

            {isOpen && (
                <ul className="options">
                    {optionList.map((option) => (
                        <li
                            key={option}
                            onClick={() => handleOptionClick(option)}
                            onMouseDown={(e) => e.stopPropagation()}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
            {/* {errorText && (
                <span
                    style={{
                        color: 'red',
                        fontStyle: 'italic',
                        float: 'left',
                    }}
                >
                    {errorText}
                </span>
            )} */}
        </div>
    )
}

export default Autocomplete
