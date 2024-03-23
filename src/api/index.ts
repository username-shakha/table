import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { createApi } from '@reduxjs/toolkit/query/react'
import { TUser } from '../types'

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['users'],
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BASEURL}/users`,
    }),
    endpoints: (builder) => ({
        getUsers: builder.query<TUser[], void>({
            query: () => '/',
        }),
        createUser: builder.mutation({
            query: (user) => ({
                body: user,
                url: '/',
                method: 'POST',
            }),
        }),
    }),
})

export const { useGetUsersQuery, useCreateUserMutation } = api
