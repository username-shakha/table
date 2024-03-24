//import { ReactNode } from 'react'

import { CSSProperties } from 'react'
import { TUser } from '../../types'

export const heads: { key: keyof TUser | 'date' | 'action'; label: string; style?: CSSProperties }[] = [
    // { key: 'id', label: 'ID' },
    {
        key: 'name',
        label: 'Имя',
        style: { width: '80px' },
    },
    {
        key: 'surname',
        label: 'Фамилия',
        style: { width: '80px' },
    },
    {
        key: 'username',
        label: 'User Name',
        style: { width: '40px', padding: ' 0px 20px ' },
    },
    {
        key: 'date',
        label: 'График работы',
        style: { width: '140px' },
    },
    {
        key: 'phone',
        label: 'Телефон',
        style: { width: '90px' },
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
        style: { width: '70px' },
    },
    {
        key: 'dialogues',
        label: 'Диалогов в работе',
    },
    {
        key: 'action',
        label: 'action',
        style: { width: '190px' },
    },
]
