interface RadioOption {
    value: string
    label: string
}

interface IInputRadioProps {
    options: RadioOption[]
    selected: string
    title: string
    // errorText?: string
    handleOptionChange: (val: string) => void
}
//errorText,
function CustomRadioInput({ options, selected, title, handleOptionChange }: IInputRadioProps) {
    return (
        <div style={{ margin: '3px 0' }}>
            <label htmlFor="" style={{ textAlign: 'left' }}>
                {title}
            </label>
            {options.map((option) => (
                <div
                    key={option.value}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 5,
                        fontSize: '12px',
                        color: '#808080',
                    }}
                >
                    <input
                        type="radio"
                        name="customRadioGroup"
                        value={option.value}
                        checked={selected === option.value}
                        onChange={() => handleOptionChange(option.value)}
                    />
                    {option.label}
                </div>
            ))}
            {/* {errorText && <span style={{ color: 'red', fontStyle: 'italic' }}>{errorText}</span>} */}
        </div>
    )
}

export default CustomRadioInput
