// export const ADD_CURRENT_TIME = 'ADD_CURRENT_TIME'
// export const CLEAR_ALL_TIMES = 'CLEAR_ALL_TIMES'
export const DELETE_USER = 'DELETE_USER' as const

export type User = {
  type: typeof DELETE_USER
  payload: number
}

export type Actions = User
