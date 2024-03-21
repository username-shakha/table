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
      state,
      {
        payload: { id, userData },
      }: PayloadAction<{ id: number; userData: Partial<IUser> }>
    ) => {
      const userIndex = state.allUsers.findIndex((user) => user.id === id)
      if (userIndex !== -1) {
        state.allUsers[userIndex] = { ...state.allUsers[userIndex], ...userData }
      }
    },
    deleteUser: (state, { payload: { id } }: PayloadAction<{ id: number }>) => {
      state.allUsers = state.allUsers.filter((user) => user.id !== id)
    },
    addUser: (state, { payload: user }: PayloadAction<IUser>) => {
      state.allUsers.push(user)
    },
  },
})

export const { updateUser, deleteUser, addUser } = userSlice.actions
export default userSlice.reducer
