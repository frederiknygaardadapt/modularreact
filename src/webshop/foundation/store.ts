import { configureStore } from '@reduxjs/toolkit'
import authReducer from 'webshop/feature/auth/auth.slice'
import basketReducer from 'webshop/feature/basket/basket.slice'
import { usersApi } from 'webshop/feature/users/users.query'
import { authApi } from 'webshop/feature/auth/auth.query'
import { productsApi } from 'webshop/feature/products/products.query'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    basket: basketReducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, usersApi.middleware, productsApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
