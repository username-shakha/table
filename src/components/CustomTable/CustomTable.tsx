//import { updateUser } from '../../app/store/redusers/users/reduser'
import useAction from '../../hooks/useAction'
//import { IUser } from '../../shared/lib/types'
import CustomButton from '../CustomButton/CustomButton'
import styles from './CustomTable.module.css'

import { ReactNode } from 'react'

type THeads = {
    key: string
    label: ReactNode
}

type TCustomTableProps = {
    rows: Record<string, ReactNode>[]
    heads: Array<THeads>
    handleUpdate: (id: number) => void
    handleDelete: (id: number) => void
}

export default function CustomTable({ heads, rows, handleUpdate, handleDelete }: TCustomTableProps) {
    // const BASE_URL = import.meta.env.VITE_BASEURL
    // const [fetchTableData, { data: tableData, loading: tableDataLoading, error: tableDataError }] = useFetchData(
    //     `${BASE_URL}/users`
    // )
    // useEffect(() => {
    //     fetchTableData()
    // }, [fetchTableData])

    const { deleteUser } = useAction()
    return (
        <div>
            <table
                style={{
                    width: '100%',
                    textAlign: 'center',
                    borderCollapse: 'collapse',
                    boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.05)',
                }}
            >
                <thead>
                    <tr>
                        {heads &&
                            heads.map((head, i) => (
                                <th className={styles.head} key={i}>
                                    {head.label}
                                </th>
                            ))}
                    </tr>
                </thead>
                <tbody>
                    {false && (
                        <tr>
                            <td style={{ textAlign: 'center', padding: '16px' }} colSpan={heads.length}>
                                Loading...
                            </td>
                        </tr>
                    )}
                    {Array.isArray(rows) &&
                        rows.map((row, index) => (
                            <tr key={index}>
                                {heads.map((head, i) => {
                                    return head.key === 'action' ? (
                                        <td key={i}>
                                            <CustomButton
                                                variant="outline"
                                                onClick={() => {
                                                    if (typeof row['id'] === 'number') handleUpdate(row['id'])
                                                }}
                                            >
                                                Edit
                                            </CustomButton>
                                            <CustomButton
                                                variant="outline"
                                                onClick={() => {
                                                    if (typeof row['id'] === 'number') deleteUser(row['id'])
                                                }}
                                            >
                                                Delete
                                            </CustomButton>
                                        </td>
                                    ) : (
                                        <td key={i}>{row[head.key]}</td>
                                    )
                                })}
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

// const handleUpdateUser = (id: number, userData: Partial<IUser>) => {
//   dispatch(updateUser({ id, userData }))
// }

// const handleDeleteUser = (id: number) => {
//   dispatch(deleteUser({ id }))
// }

// const handleAddUser = (newUser: IUser) => {
//   dispatch(addUser(newUser))
// }
