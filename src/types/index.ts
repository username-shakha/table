import { CSSProperties } from 'react'

export type TUser_Slice = {
    id: number // number
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

// export type TUser_Query = Omit<TUser_Slice, 'id'>
// //& { id: string }

export type TUser_Query = Omit<TUser_Slice, 'id'> & { id: string }

export type THeads = {
    key: string
    label: string
    style?: CSSProperties
}

export type TTableUserHeads = Omit<THeads, 'key'> & { key: keyof TUser_Query | 'date' | 'action' }
