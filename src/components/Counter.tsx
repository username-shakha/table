import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'

export default function Counter() {
  const { count } = useSelector((state: RootState) => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <br />
      <br />
      <span>{count}</span>
      <br />
      <br />
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  )
}
