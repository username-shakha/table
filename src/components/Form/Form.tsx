import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useUserManagement } from '@/hooks'
import CustomButton from '../CustomButton/CustomButton'
import { TUser_Query } from '@/types'
import styles from './Form.module.css'

//props
interface FormProps {
    initialData?: TUser_Query
}

export default function Form({ initialData }: FormProps) {
    //api hook
    const { createUser, updateUser } = useUserManagement()

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [username, setUsername] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [phone, setPhone] = useState('')
    const [selectedCompany, setSelectedCompany] = useState('')
    const [department, setDepartment] = useState('')
    const [userStatus, setUserStatus] = useState('active')
    const [dialogues, setDialogues] = useState('')

    const handleDepartmentChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDepartment(e.target.value)
    }

    const handleSelectedCompanyChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedCompany(e.target.value)
    }

    const handleUserStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserStatus(e.target.value)
    }

    const handleDialoguesInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDialogues(e.target.value)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newUser = {
            //  id: String(Math.random()), // Генерируем временный ID
            name,
            surname,
            username,
            startDate,
            endDate,
            phone,
            selectedCompany,
            department,
            userStatus,
            dialogues,
        }

        // Диспетчим действие createUser с данными нового пользователя
        if (initialData === undefined) {
            //create user api
            createUser(newUser)
        } else {
            //update user api
            updateUser({ id: initialData.id, user: { ...newUser, id: initialData.id } })
        }

        // Очищаем форму после отправки
        setName('')
        setSurname('')
        setUsername('')
        setStartDate('')
        setEndDate('')
        setPhone('')
        setSelectedCompany('')
        setDepartment('')
        setUserStatus('active')
        setDialogues('')
    }

    useEffect(() => {
        if (initialData) {
            const {
                name,
                surname,
                username,
                startDate,
                endDate,
                phone,
                selectedCompany,
                department,
                userStatus,
                dialogues,
            } = initialData

            setName(name)
            setSurname(surname)
            setUsername(username)
            setStartDate(startDate)
            setEndDate(endDate)
            setPhone(phone)
            setSelectedCompany(selectedCompany)
            setDepartment(department)
            setUserStatus(userStatus)
            setDialogues(dialogues)
        }
    }, [initialData])

    return (
        <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
            <label htmlFor="name">Имя</label>
            <input required type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

            <label htmlFor="surname">Фамилия</label>
            <input required type="text" id="surname" value={surname} onChange={(e) => setSurname(e.target.value)} />

            <label htmlFor="username">Имя пользователя</label>
            <input required type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />

            <h4 className={styles.heading}>График Работы</h4>
            <div className={styles.date}>
                <div style={{ flex: 1 }}>
                    <label style={{ textAlign: 'center', padding: 0 }} htmlFor="startDate">
                        Время Начала:
                    </label>
                    <input
                        required
                        type="date"
                        id="startDate"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>

                <div style={{ flex: 1 }}>
                    <label style={{ textAlign: 'center', padding: 0 }} htmlFor="endDate">
                        Время окончания:
                    </label>
                    <input
                        required
                        type="date"
                        id="endDate"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </div>
            </div>

            <label htmlFor="phone">Телефон</label>
            <input required type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />

            <label htmlFor="companySelect">Выберите компанию</label>
            <select
                id="companySelect"
                value={selectedCompany}
                onChange={handleSelectedCompanyChange}
                className={styles.select}
                required
            >
                <option value="">Select Option</option>
                <option value="company1">Компания 1</option>
                <option value="company2">Компания 2</option>
                <option value="company3">Компания 3</option>
                {/* Добавьте другие компании по аналогии */}
            </select>

            <label htmlFor="department">Отдел</label>
            <input type="text" id="department" value={department} onChange={handleDepartmentChange} required />

            <h4 className={styles.heading}>Выберите статус пользователя</h4>
            <div className={styles.radio}>
                <input
                    required
                    type="radio"
                    id="activeStatus"
                    value="active"
                    checked={userStatus === 'active'}
                    onChange={handleUserStatusChange}
                />
                <label htmlFor="activeStatus">Активный</label>
            </div>
            <div className={styles.radio}>
                <input
                    required
                    type="radio"
                    id="inactiveStatus"
                    value="inactive"
                    checked={userStatus === 'inactive'}
                    onChange={handleUserStatusChange}
                />
                <label htmlFor="inactiveStatus">Не активный</label>
            </div>

            <label htmlFor="dialogues">Диалогов в работе</label>
            <input required type="text" id="dialogues" value={dialogues} onChange={handleDialoguesInputChange} />

            <div style={{ textAlign: 'center' }}>
                <CustomButton variant="outline" type="submit" style={{ marginTop: '15px' }}>
                    Submit
                </CustomButton>
            </div>
        </form>
    )
}
