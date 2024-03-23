import { RootState } from '../configureStore'
import { TUser } from '../types'

export const selectUsers: (store: RootState) => TUser[] = (store) => store.users
