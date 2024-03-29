import { FormEvent, useRef, useEffect, useState, RefObject } from 'react'
import { useUserManagement } from '@/hooks'
import { Autocomplete, CustomButton, CustomRadioInput, Input, ScheduleInput } from '@/components'
import { TNewUser_Query, TUser_Query } from '@/types'
import WithErrorText from './WithErrorText/WithErrorText'

interface ICreateUpdateFormProps {
    initialData?: TUser_Query
}

//WET = WithErrorText
const InputWET = WithErrorText(Input)
const ScheduleInputWET = WithErrorText(ScheduleInput)
const AutocompleteWET = WithErrorText(Autocomplete)
const CustomRadioInputWET = WithErrorText(CustomRadioInput)

function CreateUpdateForm({ initialData }: ICreateUpdateFormProps) {
    const { createUser, updateUser } = useUserManagement()

    const [status, setStatus] = useState('active')

    const refs: { [key: string]: RefObject<HTMLInputElement> } = {
        name: useRef<HTMLInputElement>(null),
        surname: useRef<HTMLInputElement>(null),
        username: useRef<HTMLInputElement>(null),
        startDate: useRef<HTMLInputElement>(null),
        endDate: useRef<HTMLInputElement>(null),
        phone: useRef<HTMLInputElement>(null),
        selectedCompany: useRef<HTMLInputElement>(null),
        department: useRef<HTMLInputElement>(null),
        dialogues: useRef<HTMLInputElement>(null),
    }

    const [errors, setErrors] = useState<Partial<TNewUser_Query>>({})

    const resetForm = () => {
        Object.values(refs).forEach((ref) => {
            if (ref.current) {
                ref.current.value = ''
            }
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const keys = Object.keys(refs) as (keyof typeof refs)[]
        const formData: TNewUser_Query = Object.fromEntries(
            keys.map((key) => [key, refs[key].current?.value || ''])
        ) as TNewUser_Query

        const newUser = { ...formData, userStatus: status }
        const newErrors: Partial<TNewUser_Query> = {}
        for (const key in newUser) {
            if (!newUser[key as keyof TNewUser_Query].trim()) {
                newErrors[key as keyof TNewUser_Query] = `${key} is required`
            }
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        setErrors({})
        if (initialData) updateUser({ id: initialData.id, user: newUser })
        else {
            createUser(newUser)
            resetForm()
        }
    }
    useEffect(() => {
        if (initialData) {
            Object.entries(initialData).forEach(([key, value]) => {
                if (key in refs) {
                    const ref = refs[key]
                    if (ref && ref.current) {
                        ref.current.value = value
                    }
                }
            })
            if (initialData.userStatus) {
                setStatus(initialData.userStatus)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initialData])

    return (
        <form onSubmit={handleSubmit}>
            <InputWET id="firstname" label="Имя" inputRef={refs.name} errorText={errors.name} />
            <InputWET id="lastname" label="Фамилия" inputRef={refs.surname} errorText={errors.surname} />
            <InputWET id="username" label="Имя Пользователя" inputRef={refs.username} errorText={errors.username} />
            <ScheduleInputWET
                label="График работы"
                startDate={refs.startDate}
                endDate={refs.endDate}
                errorText={errors.startDate && 'invalid date'}
            />
            <InputWET id="mobile" label="Телефон" inputRef={refs.phone} errorText={errors.phone} />
            <AutocompleteWET
                title="Выберите компанию"
                options={['Gazprom', 'Lukoil', 'Rosneft', 'Rosseti', 'Tatneft']}
                selectOption={(val) => {
                    if (refs.selectedCompany.current) {
                        refs.selectedCompany.current.value = val
                    }
                }}
                inputRef={refs.selectedCompany}
                errorText={errors.selectedCompany && 'company is required'}
            />
            <InputWET id="departament" label="Отдел" inputRef={refs.department} errorText={errors.department} />
            <CustomRadioInputWET
                title="Выберите статус пользователя"
                options={[
                    { value: 'active', label: 'Активный' },
                    { value: 'no-active', label: 'Не активен' },
                ]}
                selected={status}
                handleOptionChange={(val: string) => setStatus(val)}
                errorText={errors.userStatus}
            />
            <InputWET id="dialogues" label="Дилогов в работе" inputRef={refs.dialogues} errorText={errors.dialogues} />
            <div style={{ textAlign: 'right' }}>
                <CustomButton type="submit" variant="outlined" style={{ marginTop: 20 }}>
                    Submit
                </CustomButton>
            </div>
        </form>
    )
}
export default CreateUpdateForm
