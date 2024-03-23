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
            { payload: { updatedUser, id } }: PayloadAction<{ updatedUser: IUser; id: IUser['id'] }>
        ) => {
            allUsers.splice(findUserIndexById(allUsers, id), 1, updatedUser)
        },
        deleteUser: ({ allUsers }, { payload: id }: PayloadAction<IUser['id']>) => {
            allUsers.splice(findUserIndexById(allUsers, id), 1)
        },
        addUser: ({ allUsers }, { payload: user }: PayloadAction<IUser>) => {
            allUsers.push(user)
        },
    },
})

function findUserIndexById(users: IUser[], id: number): number {
    return users.findIndex((user) => user.id === id)
}

export const { updateUser, deleteUser, addUser } = userSlice.actions
export default userSlice.reducer
