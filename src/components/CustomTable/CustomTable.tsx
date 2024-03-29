import { ReactNode } from 'react'
import CustomButton from '../CustomButton/CustomButton'
import { THeads, TUser_Query } from '@/types'
import './style.sass'

type TCustomTableProps = {
    isLoading: boolean
    rows: Record<string, ReactNode>[]
    heads: Array<THeads>
    handleUpdate: (user: TUser_Query) => void
    handleDelete: (id: string) => void
}

export default function CustomTable({ isLoading, heads, rows, handleUpdate, handleDelete }: TCustomTableProps) {
    return (
        <table>
            <thead>
                <tr>
                    {heads &&
                        heads.map((head, i) => {
                            if (head.hidden) return null
                            return (
                                <th style={{ width: '110px', ...head.style }} key={i}>
                                    {head.label}
                                </th>
                            )
                        })}
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
                            {heads.map((head, index) => {
                                if (head.hidden) return null
                                if (head.render != null)
                                    return (
                                        <td key={index} style={head.style}>
                                            {head.render(row[head.key] as string, row)}
                                        </td>
                                    )

                                return head.key === 'action' ? (
                                    <td key={head.key} style={head.style}>
                                        <div style={{ display: 'flex' }}>
                                            <CustomButton
                                                style={{ marginRight: '15px' }}
                                                variant="outlined"
                                                onClick={() => handleUpdate(row as TUser_Query)}
                                            >
                                                Edit
                                            </CustomButton>
                                            <CustomButton
                                                variant="outlined"
                                                onClick={() => handleDelete(row.id as string)}
                                            >
                                                Delete
                                            </CustomButton>
                                        </div>
                                    </td>
                                ) : (
                                    <td key={head.key} style={head.style}>
                                        {row[head.key]}
                                    </td>
                                )
                            })}
                        </tr>
                    ))}
            </tbody>
        </table>
    )
}
