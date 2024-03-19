import { users } from '../data'
import { Actions, DELETE_USER } from './actionTypes'

const initialState = users

export const userReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case DELETE_USER:
      return state.filter((user) => user.id !== action.payload)
    default:
      return state
  }
}
