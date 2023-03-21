import { createSlice, Reducer } from '@reduxjs/toolkit'
import { IError, IUser, signin, signup } from './user.api';
import type { PayloadAction } from '@reduxjs/toolkit'
export interface IState {
  status: 'idle' | 'loading' | 'fulfilled' | 'rejected',
  data?:  IUser ,
  error: string
}

const initialState:IState = {
  status: 'idle',
  data: undefined ,
  error: ''
}


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: () => {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
    },
    clearUserState: (state) => {
      state.status = 'idle'
      state.data = undefined
      state.error = ''
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      state.data = action.payload
    }
    // omit reducer cases
  },
  extraReducers: builder => {
    builder
      // Sign in
      .addCase(signin.pending, (state, _action) => {
        state.status = 'loading'
        state.error = ''
        state.data = undefined
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.data = action.payload.user
        localStorage.setItem('access_token', JSON.stringify(action.payload.tokens.access))
        localStorage.setItem('refresh_token', JSON.stringify(action.payload.tokens.refresh))
        localStorage.setItem('user', JSON.stringify(action.payload.user))
        state.status = 'fulfilled'
      })
      .addCase(signin.rejected, (state, action: any) => {
        state.status = 'rejected',
        state.error = action.payload.message
      })
      // Sign up
      .addCase(signup.pending, (state, _action) => {
        state.status = 'loading'
        state.error = ''
        state.data = undefined
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.data = action.payload.user
        localStorage.setItem('access_token', JSON.stringify(action.payload.tokens.access))
        localStorage.setItem('refresh_token', JSON.stringify(action.payload.tokens.refresh))
        localStorage.setItem('user', JSON.stringify(action.payload.user))
        state.status = 'fulfilled'
      })
      .addCase(signup.rejected, (state, action: any) => {
        state.status = 'rejected',
        state.error = action.payload.message
      })
  }
})

export const { logout, clearUserState, setUser } = userSlice.actions


export default userSlice.reducer as Reducer<typeof initialState>
// omit exports

