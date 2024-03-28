import { useState } from 'react'

function Autocomplete() {
    const [inputValue, setInputValue] = useState('')
    console.log(inputValue)
    return (
        <div className="autocomplete">
            <label htmlFor="">label</label>
            <input
                type="text"
                placeholder="input"
                value={inputValue}
                onChange={({ target }) => setInputValue(target.value)}
            />
        </div>
    )
}

export default Autocomplete
