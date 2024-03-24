import { CSSProperties } from 'react'
import { TUser_Query } from '@/types'

export const heads: { key: keyof TUser_Query | 'date' | 'action'; label: string; style?: CSSProperties }[] = [
    // { key: 'id', label: 'ID' },
    {
        key: 'name',
        label: 'Имя',
        style: { minWidth: '80px' },
    },
    {
        key: 'surname',
        label: 'Фамилия',
        style: { minWidth: '80px' },
    },
    {
        key: 'username',
        label: 'User Name',
        style: { minWidth: '40px', padding: ' 0px 20px ' },
    },
    {
        key: 'date',
        label: 'График работы',
        style: { minWidth: '140px' },
    },
    {
        key: 'phone',
        label: 'Телефон',
        style: { minWidth: '90px' },
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
        style: { minWidth: '70px' },
    },
    {
        key: 'dialogues',
        label: 'Диалогов в работе',
    },
    {
        key: 'action',
        label: 'action',
        style: { minWidth: '140px', width: '150px' },
    },
]
