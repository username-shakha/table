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
        key: 'startDate',
        label: '',
        hidden: true,
    },

    {
        key: 'startDate',
        label: 'График работы',
        render: (value, row) => (
            <div style={{ padding: '2px' }}>
                <span style={{ fontWeight: 600 }}>Начала:</span>
                <p
                    style={{
                        fontStyle: 'italic',
                        margin: 0,
                        marginBottom: '7px',
                    }}
                >
                    {formatDate(value)}
                </p>
                <span style={{ fontWeight: 600 }}>Окончания:</span>
                <p style={{ fontStyle: 'italic', textAlign: 'center', margin: 0 }}>
                    {row?.endDate && typeof row.endDate === 'string' ? formatDate(row.endDate) : ''}
                </p>
            </div>
        ),
        style: {
            width: 255,
        },
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
        render: (value) => (
            <div
                style={{
                    border: `1px solid ${value === 'active' ? 'green' : 'red'}`,
                    background: `${value === 'active' ? '#00e676' : '#ff9e80'}`,
                    padding: '1px',
                    borderRadius: '4px',
                }}
            >
                {value === 'active' ? 'Активный' : 'Не активен'}
            </div>
        ),
        style: {
            width: 130,
            boxSizing: 'border-box',
        },
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

export function formatDate(isoDateString: string) {
    const date = new Date(isoDateString)
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        hour: 'numeric',
        // minute: "numeric",
        hour12: true,
    }
    return date.toLocaleString('en-US', options)
}

export default TABLE_USER_HEADS
