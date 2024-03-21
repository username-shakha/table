import { RootState } from '../../store'
import { IUser } from '../../../../shared/lib/types'

export const selectAllUsers: (store: RootState) => IUser[] = (store) =>
  store.users.allUsers
