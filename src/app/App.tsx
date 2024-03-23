import { useState } from 'react'
import CustomTable from '../components/CustomTable/CustomTable'
import CustomButton from '../components/CustomButton/CustomButton'
import { heads } from '../components/CustomTable/constants'
import Container from '../components/WrapperContainer/Container'
import { Form } from '../components/Form/Form'
import Modal from '../components/Modal/Modal'
// import { AddUser } from './components/AddUser'
import './App.css'
//import { useAppSelector } from '../shared/lib/hooks'
//import { selectAllUsers } from './store/redusers/users/selectors'
import { IUser } from '../shared/lib/types'
import { useGetUsersQuery } from '../shared/api/api'

export default function App() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    // const allUsers = useAppSelector(selectAllUsers)
    const [updateDialog, setUpdateDialog] = useState(false)
    const [currentUser, setCurrent] = useState<IUser | null>(null)

    const { data, isLoading, isError } = useGetUsersQuery()

    if (isError) return <div>Page Not Found</div>
    return (
        <>
            <Container>
                <header className="header">
                    <h3>Добавить нового пользователя</h3>

                    <CustomButton variant="outline" onClick={() => setIsModalOpen(true)}>
                        Добавить
                    </CustomButton>
                </header>
                {isLoading ? (
                    <div>Loading...</div>
                ) : data ? (
                    <CustomTable
                        rows={data}
                        heads={heads}
                        handleUpdate={(user) => {
                            setCurrent(user)
                            setUpdateDialog(true)
                        }}
                    />
                ) : null}
            </Container>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Form />
            </Modal>
            {updateDialog && currentUser ? (
                <Modal isOpen={updateDialog} onClose={() => setUpdateDialog(false)}>
                    <Form initialData={currentUser} />
                </Modal>
            ) : null}
        </>
    )
}
