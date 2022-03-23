import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from 'webshop/foundation/constants'

export const baseServerQuery = fetchBaseQuery({ baseUrl: API_URL })
