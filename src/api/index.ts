import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { createApi } from '@reduxjs/toolkit/query/react'
import { TNewUser_Query, TUser_Query } from '@/types'

const tagTypes = () => [
    {
        type: 'users' as const,
    },
]

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['users'],
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BASEURL}/users`,
    }),
    endpoints: (builder) => ({
        getUsers: builder.query<TUser_Query[], void>({
            query: () => '/',
            providesTags: tagTypes,
        }),
        createUser: builder.mutation<void, Omit<TUser_Query, 'id'>>({
            query: (user) => ({
                url: '/',
                method: 'POST',
                body: user,
            }),
            invalidatesTags: tagTypes,
        }),
        deleteUser: builder.mutation<void, TUser_Query['id']>({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: tagTypes,
        }),
        updateUser: builder.mutation<
            void,
            {
                id: TUser_Query['id']
                user: TNewUser_Query
            }
        >({
            query: ({ id, user }) => ({
                body: user,
                url: `/${id}`,
                method: 'PUT',
            }),
            invalidatesTags: tagTypes,
        }),
    }),
})

export const { useGetUsersQuery, useCreateUserMutation, useDeleteUserMutation, useUpdateUserMutation } = api
