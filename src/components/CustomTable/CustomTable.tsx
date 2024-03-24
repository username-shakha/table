import { CSSProperties, ReactNode } from 'react'
import CustomButton from '../CustomButton/CustomButton'

// import styles from './CustomTable.module.css'
import './style.sass'
import { TUser_Query_id } from '@/types'

export type THeads = {
    key: string
    label: ReactNode
    style?: CSSProperties
}

type TCustomTableProps = {
    isLoading: boolean
    rows: Record<string, ReactNode>[]
    heads: Array<THeads>
    handleUpdate: (user: TUser_Query_id) => void
    handleDelete: (id: string) => void
}

export default function CustomTable({ isLoading, heads, rows, handleUpdate, handleDelete }: TCustomTableProps) {
    return (
        <table>
            <thead>
                <tr>
                    {heads &&
                        heads.map((head, i) => (
                            <th style={{ width: '110px', ...head.style }} key={i}>
                                {head.label}
                            </th>
                        ))}
                </tr>
            </thead>
            <tbody>
                {isLoading && (
                    <tr>
                        <td
                            style={{ display: 'table-cell', textAlign: 'center', padding: '16px' }}
                            colSpan={heads.length}
                        >
                            Loading...
                        </td>
                    </tr>
                )}
                {Array.isArray(rows) &&
                    rows.map((row, i) => (
                        <tr key={i}>
                            {heads.map((head) => {
                                return head.key === 'action' ? (
                                    <td key={head.key} style={head.style}>
                                        <CustomButton
                                            style={{ marginRight: '15px' }}
                                            variant="outline"
                                            onClick={() => handleUpdate(row as TUser_Query_id)}
                                        >
                                            Edit
                                        </CustomButton>
                                        <CustomButton variant="outline" onClick={() => handleDelete(row.id as string)}>
                                            Delete
                                        </CustomButton>
                                    </td>
                                ) : head.key === 'date' ? (
                                    <td key={head.key}>{row[head.key]}</td>
                                ) : (
                                    <td key={head.key}>{row[head.key]}</td>
                                )
                            })}
                        </tr>
                    ))}
            </tbody>
        </table>
    )
}
