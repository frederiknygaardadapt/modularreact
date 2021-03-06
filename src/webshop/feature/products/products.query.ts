import { createApi } from '@reduxjs/toolkit/query/react'
import { baseServerQuery } from 'webshop/foundation/adapters/server'
import { Product } from './products.type'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: baseServerQuery,
  endpoints: (builder) => ({
    getProducts: builder.query<{ products: Product[] }, void>({
      query: () => 'products',
    }),
    getProductBySlug: builder.query<{ product: Product }, string>({
      query: (slug) => `product/slug/${slug}`,
    }),
    getProductById: builder.query<{ product: Product }, string>({
      query: (id) => `product/id/${id}`,
    }),
  }),
})

export const { useGetProductsQuery, useGetProductBySlugQuery, useGetProductByIdQuery } = productsApi
