import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../../../shared/lib/types'
import { allUsersData } from '../../../../data'

interface IInitialState {
  allUsers: IUser[]
}

const initialState: IInitialState = {
  allUsers: allUsersData,
}

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    updateUser: (
      { allUsers },
      {
        payload: { id, userData },
      }: PayloadAction<{ id: number; userData: Partial<IUser> }>
    ) => {
      const userIndex = allUsers.findIndex((user) => user.id === id)
      if (userIndex !== -1) {
        allUsers[userIndex] = { ...allUsers[userIndex], ...userData }
      }
    },
    deleteUser: ({ allUsers }, { payload: id }: PayloadAction<number>) => {
      allUsers.filter((user) => user.id !== id)
    },
    addUser: ({ allUsers }, { payload: user }: PayloadAction<IUser>) => {
      allUsers.push(user)
    },
  },
})

export const { updateUser, deleteUser, addUser } = userSlice.actions
export default userSlice.reducer
