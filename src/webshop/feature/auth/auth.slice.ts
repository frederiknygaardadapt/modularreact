import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { authApi } from './auth.query'

export interface AuthState {
  token: string | null
}

const initialState: AuthState = {
  token: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
      state.token = payload.token
    })
  },
})

// Action creators are generated for each case reducer function
export const {} = authSlice.actions

export default authSlice.reducer
