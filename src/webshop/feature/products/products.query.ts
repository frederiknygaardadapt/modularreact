import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { Product } from './products.type'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
  endpoints: (builder) => ({
    getProducts: builder.query<{ products: Product[] }, void>({
      query: () => 'products',
    }),
    getProductBySlug: builder.query<{ product: Product }, string>({
      query: (slug) => `products/${slug}`,
    }),
  }),
})

export const { useGetProductsQuery, useGetProductBySlugQuery } = productsApi
