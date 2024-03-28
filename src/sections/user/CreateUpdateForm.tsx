import { FormEvent, useEffect, useRef } from 'react'
import Input from '@/components/Input'

interface ICreateUpdateFormProps<T> {
    initialData?: T
}

function CreateUpdateForm<T>({ initialData }: ICreateUpdateFormProps<T>) {
    const refs = {
        name: useRef<HTMLInputElement>(null),
        surname: useRef<HTMLInputElement>(null),
        username: useRef<HTMLInputElement>(null),
        mobile: useRef<HTMLInputElement>(null),
        company: useRef<HTMLInputElement>(null),
        department: useRef<HTMLInputElement>(null),
        dialogues: useRef<HTMLInputElement>(null),
        startTime: useRef<HTMLInputElement>(null),
        finishTime: useRef<HTMLInputElement>(null),
    }

    const handleSubmit = ({ preventDefault }: FormEvent<HTMLFormElement>) => {
        preventDefault()
    }

    // const resetForm = () => {
    //     Object.values(refs).forEach((ref) => {
    //         if (ref.current) {
    //             ref.current.value = ''
    //         }
    //     })
    // }

    // useEffect(() => {
    //     if (initialData) {
    //         Object.entries(initialData).forEach(([key, value]) => {
    //             if (refs[key] && refs[key].current) {
    //                 refs[key].current.value = value
    //             }
    //         })

    //         // if (initialData.status) {
    //         //     setStatus(initialData.status)
    //         // }
    //     }
    // }, [initialData])

    return (
        <form onSubmit={handleSubmit}>
            <Input id="firstname" label="Имя" inputRef={refs.name} />
            <Input id="lastname" label="Фамилия" inputRef={refs.surname} />
            <Input id="username" label="Имя Пользователя" inputRef={refs.username} />
            <Input id="mobile" label="Телефон" inputRef={refs.mobile} />
        </form>
    )
}
export default CreateUpdateForm
