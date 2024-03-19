import CustomTable from './components/CustomTable/CustomTable'
import CustomButton from './components/CustomButton/CustomButton'
import { heads } from './components/CustomTable/constants'
import './App.css'

export default function App() {
  return (
    <div style={{ width: '1200px', margin: '0 auto' }}>
      <div
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        <h2>Добавить нового пользователя</h2>
        <CustomButton variant="outline">Добавить</CustomButton>
      </div>

      <CustomTable heads={heads} />
    </div>
  )
}
