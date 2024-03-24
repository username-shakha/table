import { useState } from 'react'

//api data hook
import useUserManagement from '../hooks/useUserManagement'

//userSlice
// import { selectUsers } from '../features/selectors'
// import useAppActions, { useAppSelector } from '../hooks/redux'

//dialog hook
import { useOverlayState } from '../hooks/useOverlayState'

//components
import { Form } from '../components/Form/Form'
import Modal from '../components/Modal/Modal'
import Container from '../components/WrapperContainer/Container'
import CustomButton from '../components/CustomButton/CustomButton'
import CustomTable from '../components/CustomTable/CustomTable'

//constants & types
import { heads } from '../components/CustomTable/constants'

//sass
import './style.sass'
import { TUserApi } from '../api'

//remove user dialog. output: => current user.username
const UserName = ({ data, id }: { data: TUserApi[] | undefined; id: string | null | TUserApi }) => {
    if (data !== undefined && id !== null)
        return <h3>user name: {data.map((user) => user.id === id && user.username)}</h3>
}

function List() {
    //useGet hook api data
    // const BASE_URL = import.meta.env.VITE_BASEURL
    // const [fetchTableData, { data: tableData, loading: tableDataLoading, error: tableDataError }] = useFetchData(
    //     `${BASE_URL}/users`
    // )
    // useEffect(() => {
    //     fetchTableData()
    // }, [fetchTableData])

    //api data
    const { deleteUser, getUsers, isDeleteLoading } = useUserManagement()
    const { data: usersFetchData, isLoading: usersFetchLoading, isError: usersFetchError } = getUsers //get all users

    //userSlice
    //const users = useAppSelector(selectUsers)
    //const { removeUser, createUser, updateUser } = useAppActions()

    // dialog states
    const updateDialogState = useOverlayState()
    const createDialogState = useOverlayState()
    const removeDialogState = useOverlayState()

    //current user.id
    const [currentUser, setCurrentUser] = useState<string | null | TUserApi>(null)

    //current user.id handler
    const currentUserHandler = (id: string | null | TUserApi) => {
        if (id !== null && typeof id !== 'object') {
            deleteUser(id)
            setCurrentUser(null)
            //  removeDialogState.close()
        }
    }

    // Page Not Found isError
    if (usersFetchError) return <div>Page Not Found</div>
    return (
        <Container>
            <header className="list-header">
                <h3 style={{ paddingLeft: '15px' }}>Добавить нового пользователя</h3>
                <CustomButton variant="outline" onClick={() => createDialogState.open()}>
                    Добавить
                </CustomButton>
            </header>

            <CustomTable
                isLoading={usersFetchLoading}
                rows={usersFetchData as TUserApi[]}
                heads={heads}
                handleUpdate={(user) => {
                    setCurrentUser(user)
                    updateDialogState.open()
                }}
                handleDelete={(id) => {
                    setCurrentUser(id)
                    removeDialogState.open()
                }}
            />

            <Modal isOpen={updateDialogState.isOpen} onClose={updateDialogState.close}>
                <p>update user</p>
                {typeof currentUser === 'object' && currentUser !== null && <Form initialData={currentUser} />}
            </Modal>

            <Modal isOpen={createDialogState.isOpen} onClose={createDialogState.close}>
                <p>create user</p>
                <Form />
            </Modal>

            <Modal isOpen={removeDialogState.isOpen} onClose={removeDialogState.close}>
                <div>
                    <div
                        style={{
                            display: 'flex',
                            gap: '40px',
                            height: '60px',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <h4>Вы уверены что хотите удалить этого пользователя?</h4>
                        <p onClick={() => removeDialogState.close()} style={{ cursor: 'pointer', fontSize: '40px' }}>
                            &times;
                        </p>
                    </div>
                    <UserName data={getUsers.data} id={currentUser} />
                    <div className="remove-dialog">
                        <CustomButton
                            variant="outline"
                            onClick={() => {
                                setCurrentUser(null)
                                removeDialogState.close()
                            }}
                        >
                            Отменить
                        </CustomButton>
                        <CustomButton variant="outline" onClick={() => currentUserHandler(currentUser)}>
                            {isDeleteLoading ? 'Удаление...' : 'Да'}
                        </CustomButton>
                    </div>
                </div>
            </Modal>
        </Container>
    )
}

export default List
