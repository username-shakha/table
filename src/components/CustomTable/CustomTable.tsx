// import CustomButton from '../CustomButton/CustomButton'
// import useAction from '../../hooks/useAction'
// import { useAppSelector } from '../../shared/lib/hooks'
// import { selectAllUsers } from '../../app/store/redusers/users/selectors'
import styles from './CustomTable.module.css'
import { ReactNode } from 'react'

type TCustomTableProps = {
  rows: Record<string, ReactNode>[]
  heads: Array<string>
}

export default function CustomTable({ heads, rows }: TCustomTableProps) {
  // const BASE_URL = import.meta.env.VITE_BASEURL
  // const [fetchTableData, { data: tableData, loading: tableDataLoading, error: tableDataError }] = useFetchData(
  //   `${BASE_URL}/users`
  // )
  // useEffect(() => {
  //   fetchTableData()
  // }, [fetchTableData])

  // const allUsers = useAppSelector(selectAllUsers)
  // const { deleteUser } = useAction()

  // const handleUpdateUser = (id: number, userData: Partial<IUser>) => {
  //   dispatch(updateUser({ id, userData }))
  // }

  // const handleDeleteUser = (id: number) => {
  //   dispatch(deleteUser({ id }))
  // }

  // const handleAddUser = (newUser: IUser) => {
  //   dispatch(addUser(newUser))
  // }

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
                  {head}
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
                {heads.map((head) => (
                  <td key={head}>{row[head]}</td>
                ))}
              </tr>
            ))}
          {/* {Array.isArray(allUsers) &&
            allUsers?.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.surname}</td>
                <td>{user.username}</td>
                <td>
                  {user.endDate}
                  <br />
                  {user.startDate}
                </td>
                <td>{user.phone}</td>
                <td>{user.department}</td>
                <td>{user.selectedCompany}</td>
                <td>{user.userStatus}</td>
                <td>{user.dialogues}</td>
                <td>
                  <CustomButton variant="outline">Edit</CustomButton>

                  <CustomButton variant="outline" onClick={() => deleteUser(user.id)}>
                    Delete
                  </CustomButton>
                </td>
              </tr>
            ))} */}
        </tbody>
      </table>
    </div>
  )
}
