import { useState } from 'react'
import CustomTable from './components/CustomTable/CustomTable'
import CustomButton from './components/CustomButton/CustomButton'
import { heads } from './components/CustomTable/constants'
import './App.css'
import { AddUser } from './components/AddUser'
import Container from './components/Container'
import { Form } from './components/Form/Form'

export default function App() {
  const [toggle, setToggle] = useState<boolean>(false)
  return (
    <Container>
      <div
        className="top"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '40px 0px',
        }}
      >
        <h3>Добавить нового пользователя</h3>

        <CustomButton variant="outline" onClick={() => setToggle((prev) => !prev)}>
          Добавить
        </CustomButton>
      </div>

      <CustomTable heads={heads} />
      {toggle && <AddUser />}
      <Form />
    </Container>
  )
}
