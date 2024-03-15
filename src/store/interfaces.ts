export const DELETE = 'Delete' as const

export interface IDeleteAction {
  type: typeof DELETE
  payload: number
}

export interface IUserState {
  id: number
  username: string
  lastname: string
  firstname: string
  phonenumber: string
  company: string
  department: string
  status: boolean
  dialoguesinprogress: string
}
