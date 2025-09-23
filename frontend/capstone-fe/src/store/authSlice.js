import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../api/axios'

export const login = createAsyncThunk('auth/login', async ({email,password}, thunkAPI) => {
  const res = await api.post('/auth/login', { email, password })
  return res.data
})

const authSlice = createSlice({
  name: 'auth',
  initialState: { token: localStorage.getItem('token') || null, status: 'idle', error: null },
  reducers: {
    logout: (state) => {
      state.token = null
      localStorage.removeItem('token')
    }
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      const token = action.payload.token
      state.token = token
      localStorage.setItem('token', token)
      state.status = 'succeeded'
    })
    builder.addCase(login.rejected, (state, action) => {
      state.error = action.error.message
      state.status = 'failed'
    })
  }
})

export const { logout } = authSlice.actions
export default authSlice.reducer
