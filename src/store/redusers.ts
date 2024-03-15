import { users } from '../data'
import { IDeleteAction, IUserState } from './interfaces'

const initialState: IUserState[] = users

export type TActions = IDeleteAction

export const userReducer = (state = initialState, action: TActions): IUserState[] => {
  switch (action.type) {
    case 'Delete':
      return [...state.filter((user) => user.id !== action.payload)]
    default:
      return state
  }
}
