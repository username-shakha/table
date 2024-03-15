import CustomTable from './components/CustomTable'
import CustomButton from './components/ICustomButton'
import { heads } from './components/CustomTable/constants'

export default function App() {
  return (
    <>
      <div style={{ display: 'flex', width: '70%' }}>
        <h2>add an employee</h2>
        <CustomButton style={{ marginLeft: 'auto', height: 25 }}>Add</CustomButton>
      </div>

      <CustomTable heads={heads} />
    </>
  )
}
