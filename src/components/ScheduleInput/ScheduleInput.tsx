import { RefObject } from 'react'
import './style.sass'

interface IScheduleInputProps {
    label: string
    startDate: RefObject<HTMLInputElement>
    endDate: RefObject<HTMLInputElement>
    errorText?: string
}

function ScheduleInput({ label, startDate, endDate, errorText }: IScheduleInputProps) {
    return (
        <div className="schedule">
            <label className="schedule-title">{label}</label>
            <div className="schedule-content">
                <div>
                    <label>Время начала:</label>
                    <input type="datetime-local" ref={startDate} />
                    {errorText && <span style={{ color: 'red', fontStyle: 'italic' }}>{errorText}</span>}
                </div>
                <div>
                    <label>Время окончания:</label>
                    <input type="datetime-local" ref={endDate} />
                    {errorText && <span style={{ color: 'red', fontStyle: 'italic' }}>{errorText}</span>}
                </div>
            </div>
        </div>
    )
}

export default ScheduleInput
