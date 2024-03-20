import { useState } from 'react'
import CustomTable from './components/CustomTable/CustomTable'
import CustomButton from './components/CustomButton/CustomButton'
import { heads } from './components/CustomTable/constants'
import './App.css'
import { AddUser } from './components/AddUser'
// import { Form } from './components/Form'

export default function App() {
  const [toggle, setToggle] = useState<boolean>(false)
  return (
    <div style={{ width: '1200px', margin: '0 auto' }}>
      <div
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        <h2>Добавить нового пользователя</h2>
        <CustomButton variant="outline" onClick={() => setToggle((prev) => !prev)}>
          Добавить
        </CustomButton>
      </div>

      <CustomTable heads={heads} />
      {toggle && <AddUser />}
      {/* <Form /> */}
    </div>
  )
}
