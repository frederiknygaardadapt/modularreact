import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { Login, Token } from './auth.type'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
  endpoints: (builder) => ({
    login: builder.mutation<Token, Login>({
      query: (login) => ({
        url: 'login',
        method: 'POST',
        body: login,
      }),
      transformResponse: (response: { data: any }) => response.data,
    }),
  }),
})

export const { useLoginMutation } = authApi
