import { TTableUserHeads } from '@/types'

const TABLE_USER_HEADS: TTableUserHeads[] = [
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
        style: { minWidth: '130px', width: '130px' },
    },
    {
        key: 'selectedCompany',
        label: 'Компания',
    },
    {
        key: 'department',
        label: 'Отдел',
        style: { width: '70px' },
    },
    {
        key: 'userStatus',
        label: 'Статус',
        style: { width: '80px' },
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

export default TABLE_USER_HEADS
