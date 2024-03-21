import useAction from '../../hooks/useAction'
import { IUser } from '../../shared/lib/types'
import CustomButton from '../CustomButton/CustomButton'
import styles from './CustomTable.module.css'

import { ReactNode } from 'react'

type Theads = {
  key: string
  label: ReactNode
}

type TCustomTableProps = {
  data: IUser[]
  rows?: Array<{ [key: string]: ReactNode }>
  heads: Array<Theads>
}

export default function CustomTable({ heads, rows, data }: TCustomTableProps) {
  // const BASE_URL = import.meta.env.VITE_BASEURL
  // const [fetchTableData, { data: tableData, loading: tableDataLoading, error: tableDataError }] = useFetchData(
  //   `${BASE_URL}/users`
  // )
  // useEffect(() => {
  //   fetchTableData()
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
          {/* {Array.isArray(rows) &&
            rows.map((row, index) => (
              <tr key={index}>
                {heads.map((head) => (
                  <td key={head}>{row[head]}</td>
                ))}
                <td>
                  <CustomButton variant="outline">Edit</CustomButton>

                  <CustomButton variant="outline" onClick={() => deleteUser(user.id)}>
                    Delete
                  </CustomButton>
                </td>
              </tr>
            ))} */}

          {Array.isArray(data) &&
            data?.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.surname}</td>
                <td>{item.username}</td>
                <td>
                  {item.endDate}
                  <br />
                  {item.startDate}
                </td>
                <td>{item.phone}</td>
                <td>{item.department}</td>
                <td>{item.selectedCompany}</td>
                <td>{item.userStatus}</td>
                <td>{item.dialogues}</td>
                <td>
                  <CustomButton variant="outline">Edit</CustomButton>

                  <CustomButton variant="outline" onClick={() => deleteUser(item.id)}>
                    Delete
                  </CustomButton>
                </td>
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
