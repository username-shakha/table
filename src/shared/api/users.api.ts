import { api } from './api'
export const usersApi = api.injectEndpoints({
    endpoints: (builder) => ({
        createUser: builder.mutation({
            query: (user) => ({
                body: user,
                url: '/',
                method: 'POST',
            }),
        }),
    }),
})
