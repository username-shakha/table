import Counter from './components/Counter'
import UserName from './components/UserName'
import './App.css'
import Table from './components/Table'

export default function App() {
  return (
    <>
      <Counter />
      <br />
      <UserName />
      <div style={{ display: 'flex', width: '70%' }}>
        <h2>add an employee</h2>
        <button style={{ marginLeft: 'auto', height: 25 }}>Add</button>
      </div>

      <Table dataprops="data" />
    </>
  )
}
