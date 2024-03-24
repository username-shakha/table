import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { createApi } from '@reduxjs/toolkit/query/react'
import { TUser_Query, TUser_Query_id } from '@/types'

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
        getUsers: builder.query<TUser_Query_id[], void>({
            query: () => '/',
            providesTags: tagTypes,
        }),
        createUser: builder.mutation<void, TUser_Query>({
            query: (user) => ({
                url: '/',
                method: 'POST',
                body: user,
            }),
            invalidatesTags: tagTypes,
        }),
        deleteUser: builder.mutation<void, TUser_Query_id['id']>({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: tagTypes,
        }),
        updateUser: builder.mutation<
            void,
            {
                id: TUser_Query_id['id']
                user: TUser_Query_id
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
