import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'

const Counter: React.FC = () => {
  const { count } = useSelector((state: RootState) => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <span>{count}</span>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  )
}

export default Counter
