import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { users } from '@/data'
import { TUser_Slice } from '@/types'

//actions
type Update_PayloadType = PayloadAction<{ user: TUser_Slice; id: TUser_Slice['id'] }>
type Remove_PayloadType = PayloadAction<TUser_Slice['id']>
type Create_PayloadType = PayloadAction<TUser_Slice>

// type initialStateType = {
//     users: TUser_Slice[]
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
        updateUser: (state, { payload: { user, id } }: Update_PayloadType) => {
            state.splice(findUserIndexById(state, id), 1, user)
        },
        removeUser: (state, { payload: id }: Remove_PayloadType) => {
            state.splice(findUserIndexById(state, id), 1)
        },
        createUser: (state, { payload: user }: Create_PayloadType) => {
            state.push(user)
        },
    },
})

function findUserIndexById(users: TUser_Slice[], id: number): number {
    return users.findIndex((user) => user.id === id)
}

export const { updateUser, removeUser, createUser } = userSlice.actions
export default userSlice.reducer
