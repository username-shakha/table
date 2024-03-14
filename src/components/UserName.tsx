import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'

export default function UserName() {
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
