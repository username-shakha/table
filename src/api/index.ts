import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { createApi } from '@reduxjs/toolkit/query/react'
//import { TUser } from '../types'

export type TUserApi = {
    id: string
    name: string
    surname: string
    username: string
    startDate: string
    endDate: string
    phone: string
    selectedCompany: string
    department: string
    userStatus: string
    dialogues: string
}

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['users'],
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BASEURL}/users`,
    }),
    endpoints: (builder) => ({
        getUsers: builder.query<TUserApi[], void>({
            query: () => '/',
            providesTags: () => [
                {
                    type: 'users',
                },
            ],
        }),
        createUser: builder.mutation({
            query: (user) => ({
                url: '/',
                method: 'POST',
                body: user,
            }),
            invalidatesTags: () => [
                {
                    type: 'users',
                },
            ],
        }),
        deleteUser: builder.mutation<void, string>({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: () => [
                {
                    type: 'users',
                },
            ],
        }),
        updateUser: builder.mutation<
            void,
            {
                userId: string
                userData: {
                    name: string
                    surname: string
                    username: string
                    startDate: string
                    endDate: string
                    phone: string
                    selectedCompany: string
                    department: string
                    userStatus: string
                    dialogues: string
                }
            }
        >({
            query: ({ userId, userData }) => ({
                body: userData,
                url: `/${userId}`,
                method: 'PUT',
            }),
            invalidatesTags: () => [
                {
                    type: 'users',
                },
            ],
        }),
    }),
})

export const { useGetUsersQuery, useCreateUserMutation, useDeleteUserMutation, useUpdateUserMutation } = api
