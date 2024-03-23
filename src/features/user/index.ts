import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TUser } from '../../types'
import { users } from '../../data'

//actions
type update = PayloadAction<{ user: TUser; id: TUser['id'] }>
type remove = PayloadAction<TUser['id']>
type create = PayloadAction<TUser>

// type initialStateType = {
//     users: TUser[]
//     posts: TPost[]

// }

// const initialState: initialStateType = {
//     users,
//     posts,
// }

const userSlice = createSlice({
    name: 'users',
    initialState: users,
    reducers: {
        updateUser: (state, { payload: { user, id } }: update) => {
            state.splice(findUserIndexById(state, id), 1, user)
        },
        removeUser: (state, { payload: id }: remove) => {
            state.splice(findUserIndexById(state, id), 1)
        },
        createUser: (state, { payload: user }: create) => {
            state.push(user)
        },
    },
})

function findUserIndexById(users: TUser[], id: number): number {
    return users.findIndex((user) => user.id === id)
}

export const { updateUser, removeUser, createUser } = userSlice.actions
export default userSlice.reducer
