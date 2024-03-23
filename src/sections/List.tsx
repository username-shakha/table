import { useState } from 'react'
import Container from '../components/WrapperContainer/Container'
import CustomButton from '../components/CustomButton/CustomButton'
import CustomTable from '../components/CustomTable/CustomTable'
import Modal from '../components/Modal/Modal'
import { Form } from '../components/Form/Form'
import { heads } from '../components/CustomTable/constants'
import { useGetUsersQuery } from '../api'
import useAppActions from '../hooks/redux'
//import useAppActions, { useAppSelector } from '../hooks/redux'
//import { selectUsers } from '../features/selectors'

function List() {
    const { data } = useGetUsersQuery()
    // const allUsers = useAppSelector(selectUsers)
    const { removeUser } = useAppActions()

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [updateDialog, setUpdateDialog] = useState(false)
    const [currentUser, setCurrentUser] = useState<number | null>(null)

    console.log(data)
    // Page Not Found isError
    //  if (isError) return <div>Page Not Found</div>
    return (
        <Container>
            <header className="header">
                <h3>Добавить нового пользователя</h3>
                <CustomButton variant="outline" onClick={() => setIsModalOpen(true)}>
                    Добавить
                </CustomButton>
            </header>

            {Array.isArray(data) && (
                <CustomTable
                    rows={data}
                    heads={heads}
                    handleUpdate={(id) => {
                        setCurrentUser(id)
                        setUpdateDialog(true)
                    }}
                    handleDelete={(id) => {
                        removeUser(id)
                    }}
                />
            )}

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Form />
            </Modal>

            {updateDialog && currentUser && (
                <Modal isOpen={updateDialog} onClose={() => setUpdateDialog(false)}>
                    <Form />
                </Modal>
            )}
        </Container>
    )
}

export default List
