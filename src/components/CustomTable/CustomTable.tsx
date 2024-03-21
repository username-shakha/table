// import { useEffect } from 'react'
// import useFetchData from '../../hooks/useGet'

// import { useDispatch, useSelector } from 'react-redux'
// import { RootState } from '../../redux/store'
// import { deleteUser } from '../../redux/actionCreators'
import { deleteUser } from '../../app/store/redusers/users/reduser'
import { RootState } from '../../app/store/store'
// import { IUser } from '../../shared/lib/types'
import CustomButton from '../CustomButton/CustomButton'
import styles from './CustomTable.module.css'

import { useSelector, useDispatch } from 'react-redux'

type TCustomTableProps = {
  heads: Array<string>
}

export default function CustomTable({ heads }: TCustomTableProps) {
  // const BASE_URL = import.meta.env.VITE_BASEURL
  // const [fetchTableData, { data: tableData, loading: tableDataLoading, error: tableDataError }] = useFetchData(
  //   `${BASE_URL}/users`
  // )
  // useEffect(() => {
  //   fetchTableData()
  // }, [fetchTableData])

  // const dispatch = useDispatch()
  // const users = useSelector((state: RootState) => state.user)

  const allUsers = useSelector((state: RootState) => state.users.allUsers)
  const dispatch = useDispatch()

  // const handleUpdateUser = (id: number, userData: Partial<IUser>) => {
  //   dispatch(updateUser({ id, userData }))
  // }

  const handleDeleteUser = (id: number) => {
    dispatch(deleteUser({ id }))
  }

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
          {Array.isArray(allUsers) &&
            allUsers?.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.surname}</td>
                <td>{user.username}</td>
                <td>
                  {user.endDate}
                  {user.startDate}
                </td>
                <td>{user.phone}</td>
                <td>{user.department}</td>
                <td>{user.selectedCompany}</td>
                <td>{user.userStatus}</td>
                <td>{user.dialogues}</td>
                <td>
                  <CustomButton variant="outline">Edit</CustomButton>

                  <CustomButton
                    variant="outline"
                    onClick={() => handleDeleteUser(user.id)}
                  >
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
