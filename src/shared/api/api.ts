import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { createApi } from '@reduxjs/toolkit/query/react'
import { TUser } from '../lib/types'

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['users'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4200/users',
    }),
    endpoints: (builder) => ({
        getUsers: builder.query<TUser[], void>({
            query: () => '/',
        }),
    }),
})

export const { useGetUsersQuery } = api
