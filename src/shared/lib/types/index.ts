export interface IUser {
    id: number
    name: string
    surname: string
    username: string
    startDate: string
    endDate: string
    phone: string
    selectedCompany: string
    department: string
    userStatus: string // Изменяем тип на строку
    dialogues: string
}

export type TUser = {
    id: number
    name: string
    surname: string
    username: string
    startDate: string
    endDate: string
    phone: string
    selectedCompany: string
    department: string
    userStatus: string // Изменяем тип на строку
    dialogues: string
}
