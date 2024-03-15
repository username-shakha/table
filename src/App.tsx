import Counter from './components/Counter'
import UserName from './components/UserName'
import './App.css'
import Table from './components/Table'
import Button from './components/Button'

export default function App() {
  return (
    <>
      <Counter />
      <br />
      <UserName />
      <div style={{ display: 'flex', width: '70%' }}>
        <h2>add an employee</h2>
        <Button style={{ marginLeft: 'auto', height: 25 }}>Add</Button>
      </div>

      <Table dataprops="data" />
    </>
  )
}
