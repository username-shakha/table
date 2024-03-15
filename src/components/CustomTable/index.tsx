// import { useEffect } from 'react'
// import useFetchData from '../../hooks/useGet'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import CustomButton from '../ICustomButton'
import { deleteUser } from '../../store/actions'
import { IDeleteAction } from '../../store/interfaces'

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

  const dispatch = useDispatch()
  const users = useSelector((state: RootState) => state.user)

  const handleDelete = (userId: number) => {
    if (userId) dispatch<IDeleteAction>(deleteUser(userId))
  }

  return (
    <div>
      <table>
        <thead>
          <tr>{heads && heads.map((head, i) => <th key={i}>{head}</th>)}</tr>
        </thead>
        <tbody>
          {false && (
            <tr>
              <td style={{ textAlign: 'center', padding: '16px' }} colSpan={heads.length}>
                Loading...
              </td>
            </tr>
          )}
          {Array.isArray(users) &&
            users?.map((user) => (
              <tr key={user.id}>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.username}</td>
                <td>{user.phonenumber}</td>
                <td>{user.company}</td>
                <td>{user.department}</td>
                <td>{user.status ? 'Active' : 'Inactive'}</td>
                <td>{user.dialoguesinprogress}</td>
                <td>
                  <CustomButton>Edit</CustomButton>
                </td>
                <td>
                  <CustomButton onClick={() => handleDelete(user.id)}>
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
