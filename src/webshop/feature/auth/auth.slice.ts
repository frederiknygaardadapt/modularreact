import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { authApi } from './auth.query'
import { RootState } from 'webshop/foundation/store'
export interface AuthState {
  token: string | null
}

const initialState: AuthState = {
  token: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
      state.token = payload.token
    })
  },
})

export const useIsAuthenticated = () => useSelector((state: RootState) => state.auth.token !== null)

// Action creators are generated for each case reducer function
export const { logout } = authSlice.actions

export default authSlice.reducer
