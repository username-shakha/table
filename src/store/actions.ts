import { DELETE, IDeleteAction } from './interfaces'

export const deleteUser = (userId: number): IDeleteAction => ({
  type: DELETE,
  payload: userId,
})
