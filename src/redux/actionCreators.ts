import * as actionTypes from './actionTypes'

export function deleteUser(id: number) {
  return {
    type: actionTypes.DELETE_USER,
    payload: id,
  }
}
