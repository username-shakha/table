// import { useEffect } from 'react'
// import useFetchData from '../../hooks/useGet'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { deleteUser } from '../../redux/actionCreators'
import CustomButton from '../CustomButton/CustomButton'
import styles from './CustomTable.module.css'
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
          {Array.isArray(users) &&
            users?.map((user) => (
              <tr key={user.id}>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.username}</td>
                <td></td>
                <td>{user.phonenumber}</td>
                <td>{user.company}</td>
                <td>{user.department}</td>
                <td>{user.status ? 'Active' : 'Inactive'}</td>
                <td>{user.dialoguesinprogress}</td>
                <td>
                  <CustomButton variant="outline">Edit</CustomButton>

                  <CustomButton
                    variant="outline"
                    onClick={() => dispatch(deleteUser(user.id))}
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
