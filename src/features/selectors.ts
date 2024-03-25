import { RootState } from '@/configureStore'
import { TUser_Slice } from '@/types'

export const selectUsers: (store: RootState) => TUser_Slice[] = (store) => store.users
