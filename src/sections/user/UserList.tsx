import { useState } from 'react'
import { useOverlayState, useUserManagement } from '@/hooks'
import { Container, CustomButton, CustomTable, Dialog, TABLE_USER_HEADS } from '@/components'
import CreateUpdateForm from './CreateUpdate/CreateUpdateForm'
import { TUser_Query } from '@/types'

function UserList() {
    //useGet hook mockapi api data
    // const BASE_URL = import.meta.env.VITE_BASEURL
    // const [fetchTableData, { data: tableData, loading: tableDataLoading, error: tableDataError }] = useFetchData(
    //     `${BASE_URL}/users`
    // )
    // useEffect(() => {
    //     fetchTableData()
    // }, [fetchTableData])

    //useUserManagement hook json-server api data
    const { deleteUser, getUsers, isDeleteLoading } = useUserManagement()
    const { data: usersQueryData, isLoading: usersQueryLoading, isError: usersQueryError } = getUsers //get all users

    //userSlice
    //const users = useAppSelector(selectUsers)
    //const { removeUser, createUser, updateUser } = useAppActions()

    // dialog states
    const updateDialogState = useOverlayState()
    const createDialogState = useOverlayState()
    const removeDialogState = useOverlayState()

    //current user.id
    const [currentUser, setCurrentUser] = useState<string | null | TUser_Query>(null)

    //current user.id handler
    const currentUserHandler = (id: string | null | TUser_Query) => {
        if (id !== null && typeof id !== 'object') {
            deleteUser(id)
            setCurrentUser(null)
            //  removeDialogState.close()
        }
    }

    // Page Not Found isError !!!
    if (usersQueryError) return <div>Page Not Found</div>
    return (
        <>
            <header className="list-header">
                <Container maxWidth="lg" style={{ marginTop: '30px', marginBottom: '30px' }}>
                    <div style={headerStyles}>
                        <h3 style={{ paddingLeft: '15px' }}>Добавить нового пользователя</h3>
                        <CustomButton
                            variant="contained"
                            style={{ padding: '8px', fontSize: '13px' }}
                            onClick={() => createDialogState.open()}
                        >
                            Добавить
                        </CustomButton>
                    </div>
                </Container>
            </header>

            <Container maxWidth="lg">
                <CustomTable
                    isLoading={usersQueryLoading}
                    rows={usersQueryData as TUser_Query[]}
                    heads={TABLE_USER_HEADS}
                    handleUpdate={(user) => {
                        setCurrentUser(user)
                        updateDialogState.open()
                    }}
                    handleDelete={(id) => {
                        setCurrentUser(id)
                        removeDialogState.open()
                    }}
                />

                <Dialog isOpen={updateDialogState.isOpen} onClose={updateDialogState.close}>
                    <p>update user</p>
                    {typeof currentUser === 'object' && currentUser !== null && (
                        <CreateUpdateForm initialData={currentUser} />
                    )}
                </Dialog>

                <Dialog isOpen={createDialogState.isOpen} onClose={createDialogState.close}>
                    <p>create</p>
                    <CreateUpdateForm />
                </Dialog>

                <Dialog isOpen={removeDialogState.isOpen} onClose={removeDialogState.close}>
                    <div>
                        <div style={removeDialogContentBox}>
                            <h4>Вы уверены что хотите удалить этого пользователя?</h4>
                        </div>

                        {/*username: the user being deleted */}
                        <UserName data={usersQueryData} id={currentUser} />

                        <div style={removeDialog}>
                            <CustomButton
                                variant="outlined"
                                onClick={() => {
                                    setCurrentUser(null)
                                    removeDialogState.close()
                                }}
                            >
                                Отменить
                            </CustomButton>
                            <CustomButton
                                variant="outlined"
                                color="error"
                                onClick={() => currentUserHandler(currentUser)}
                            >
                                {isDeleteLoading ? 'Удаление...' : 'Да'}
                            </CustomButton>
                        </div>
                    </div>
                </Dialog>
            </Container>
        </>
    )
}

const headerStyles = {
    minWidth: '1095px',
    padding: '10px 15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)',
}

const removeDialog = {
    display: 'flex',
    justifyContent: 'right',
    gap: '15px',
    alignItems: 'center',
    margin: '15px 0px 0px 0px',
}

const removeDialogContentBox = {
    display: 'flex',
    gap: '40px',
    height: '60px',
    alignItems: 'center',
    justifyContent: 'space-between',
}

//remove user dialog. output: => current user.username
const UserName = ({ data, id }: { data: TUser_Query[] | undefined; id: string | null | TUser_Query }) => {
    if (data !== undefined && id !== null)
        return (
            <h3 style={{ marginBottom: '30px' }}>user name: {data.map((user) => user.id === id && user.username)}</h3>
        )
}

export default UserList
