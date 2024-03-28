import { RefObject } from 'react'
import './style.sass'

interface IScheduleInputProps {
    label: string
    startDate: RefObject<HTMLInputElement>
    endDate: RefObject<HTMLInputElement>
}

function ScheduleInput({ label, startDate, endDate }: IScheduleInputProps) {
    return (
        <div className="schedule">
            <label className="schedule-title">{label}</label>
            <div className="schedule-content">
                <div>
                    <label>Время начала:</label>
                    <input type="datetime-local" ref={startDate} />
                </div>
                <div>
                    <label>Время окончания:</label>
                    <input type="datetime-local" ref={endDate} />
                </div>
            </div>
        </div>
    )
}

export default ScheduleInput
