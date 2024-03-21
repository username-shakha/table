import { RootState } from '../../store'
import { IUser } from '../../../../shared/lib/types'

const selectAllUsers: (store: RootState) => IUser[] = (store) => store.users.allUsers

export { selectAllUsers }
