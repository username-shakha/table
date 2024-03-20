import { FormEvent, useState } from 'react'

export function Form() {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [username, setUsername] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [phone, setPhone] = useState('')
  //const [company, setCompany] = useState('')
  //const [status, setStatus] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission here
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="add">
      <label htmlFor="name">Имя</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="surname">Фамилия</label>
      <input
        type="text"
        id="surname"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      />

      <label htmlFor="username">Имя пользователя</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label htmlFor="startDate">Start Date:</label>
      <input
        type="text"
        id="startDate"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />

      <label htmlFor="endDate">End Date:</label>
      <input
        type="text"
        id="endDate"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />

      <label htmlFor="phone">Телефон</label>
      <input
        type="text"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  )
}
