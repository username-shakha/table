import { CSSProperties, ReactNode } from 'react'

export type TUser_Slice = {
    id: number // id = number
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

export type TNewUser_Query = Omit<TUser_Slice, 'id'> //the json-server automatically creates an identifier
// //& { id: string }

export type TUser_Query = Omit<TUser_Slice, 'id'> & { id: string } //id = string

export type THeads = {
    key: string
    label: string
    style?: CSSProperties
    hidden?: boolean
    render?: (value: string, row?: Record<string, ReactNode>) => ReactNode
}

export type TTableUserHeads = Omit<THeads, 'key'> & { key: keyof TUser_Query | 'action' }
