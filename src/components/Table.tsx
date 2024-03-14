import { useEffect } from 'react'
import useFetchData from '../hooks/useGet'

interface User {
  id: string
  username: string
  lastname: string
  firstname: string
  'work-schedule': object
  'phone-number': string
  company: string
  department: string
  status: boolean
  'dialogues-in-progress': string
  action: object
}

type TTableProps = {
  dataprops: 'data'
}

export default function Table({ dataprops }: TTableProps) {
  const BASE_URL = import.meta.env.VITE_BASEURL
  const [fetchTableData, { data: tableData, loading: tableDataLoading }] = useFetchData(
    `${BASE_URL}/users`
  )

  useEffect(() => {
    fetchTableData()
  }, [fetchTableData])

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Work schedule</th>
            <th>Phone Number</th>
            <th>Company</th>
            <th>Department</th>
            <th>Status</th>
            <th>Dialogues in progress</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableDataLoading && <td>Loading...</td>}
          {Array.isArray(tableData) &&
            tableData?.map((user: User) => (
              <tr key={user.id}>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.username}</td>
                {/* <td>{user['work-schedule']}</td> object */}
                <td>{dataprops}</td>
                <td>{user['phone-number']}</td>
                <td>{user.company}</td>
                <td>{user.department}</td>
                <td>{user.status ? 'Active' : 'Inactive'}</td>
                <td>{user['dialogues-in-progress']}</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
