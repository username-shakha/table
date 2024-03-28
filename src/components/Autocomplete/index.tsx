import { useEffect, useState } from 'react'
import './style.sass'

interface IAutocompleteProps {
    options: string[]
    title: string
}

function Autocomplete({ options, title }: IAutocompleteProps) {
    const [inputValue, setInputValue] = useState('')
    const [isOpen, setIsOpen] = useState<boolean>(false)

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
                id="autocomplete"
                value={inputValue}
                onChange={({ target }) => setInputValue(target.value)}
                onFocus={() => setIsOpen(true)}
                onMouseDown={(e) => e.stopPropagation()}
            />
            {isOpen && (
                <ul className="options">
                    <li>List Option</li>
                    <li>List Option 1</li>
                    <li>List Option 2</li>
                    <li>List Option 3</li>
                    <li>List Option 4</li>
                </ul>
            )}
        </div>
    )
}

export default Autocomplete
