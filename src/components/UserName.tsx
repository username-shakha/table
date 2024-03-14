import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'

const UserName: React.FC = () => {
  const { name } = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_NAME', payload: e.target.value })
  }

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <p>Hello, {name}!</p>
    </div>
  )
}

export default UserName
