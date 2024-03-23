//import { ReactNode } from 'react'
import { TUser } from '../../shared/lib/types'

export const heads: { key: keyof TUser | 'date' | 'action'; label: string }[] = [
    // { key: 'id', label: 'ID' },
    {
        key: 'name',
        label: 'Имя',
    },
    {
        key: 'surname',
        label: 'Фамилия',
    },
    {
        key: 'username',
        label: 'User Name',
    },
    {
        key: 'date',
        label: 'График работы',
    },
    {
        key: 'phone',
        label: 'Телефон',
    },
    {
        key: 'selectedCompany',
        label: 'Компания',
    },
    {
        key: 'department',
        label: 'Отдел',
    },
    {
        key: 'userStatus',
        label: 'Статус',
    },
    {
        key: 'dialogues',
        label: 'Диалогов в работе',
    },
    {
        key: 'action',
        label: 'action',
    },
]

// 'Имя',
//   'Фамилия',
//   'User Name',
//   'График работы',
//   'Телефон',
//   'Компания',
//   'Отдел',
//   'Статус',
//   'Диалогов в работе',
//   'Action',
