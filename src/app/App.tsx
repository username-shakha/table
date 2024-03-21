import { useState } from 'react'
import CustomTable from '../components/CustomTable/CustomTable'
import CustomButton from '../components/CustomButton/CustomButton'
import { heads } from '../components/CustomTable/constants'
import Container from '../components/WrapperContainer/Container'
import { Form } from '../components/Form/Form'
import Modal from '../components/Modal/Modal'
// import { AddUser } from './components/AddUser'
import './App.css'
import { useAppSelector } from '../shared/lib/hooks'
import { selectAllUsers } from './store/redusers/users/selectors'

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const allUsers = useAppSelector(selectAllUsers)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  return (
    <>
      <Container>
        <header className="header">
          <h3>Добавить нового пользователя</h3>

          <CustomButton variant="outline" onClick={openModal}>
            Добавить
          </CustomButton>
        </header>

        <CustomTable data={allUsers} heads={heads} />
      </Container>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Form />
      </Modal>
    </>
  )
}
