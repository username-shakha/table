import { useEffect, useMemo, useState } from 'react'
//ChangeEvent
import './style.sass'
import { ClearIcon, DownIcon, UpIcon } from '../icons'

interface IAutocompleteProps {
    options: string[]
    selectOption: (val: string) => void
    title: string
}

function Autocomplete({ options, selectOption, title }: IAutocompleteProps) {
    const [inputValue, setInputValue] = useState('')
    const [isOpen, setIsOpen] = useState<boolean>(false)

    // const hanleIputChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     const { value } = event.target
    //     setInputValue(value)
    //     setIsOpen(true)
    // }

    // const handleOptionClick = (option: string) => {
    //     setInputValue(option)
    //     selectOption(option)
    //     setIsOpen(false)
    // }

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

    return (
        <div className="autocomplete">
            <label htmlFor="autocomplete">{title ? title : 'Выберите параметры'}</label>
            <input
                type="text"
                placeholder="Select Option"
                //id="autocomplete"
                value={inputValue}
                onChange={({ target }) => {
                    setInputValue(target.value)
                    setIsOpen(true)
                }}
                onFocus={() => setIsOpen(true)}
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
                            onClick={() => {
                                setInputValue(option)
                                selectOption(option)
                                setIsOpen(false)
                            }}
                            onMouseDown={(e) => e.stopPropagation()}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Autocomplete
