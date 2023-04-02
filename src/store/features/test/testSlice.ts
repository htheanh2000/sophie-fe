import { createSlice, Reducer } from '@reduxjs/toolkit'
import { IError, ITest, IResponse, createTest } from './test.api';
export interface IState {
  status: 'idle' | 'loading' | 'fulfilled' | 'rejected',
  data?:  ITest ,
  error: string
}

const initialState:IState = {
  status: 'idle',
  data: undefined ,
  error: ''
}


const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    // omit reducer cases
  },
  extraReducers: builder => {
    builder
      // create a test
      .addCase(createTest.pending, (state, _action) => {
        state.status = 'loading'
        state.error = ''
        state.data = undefined
      })
      .addCase(createTest.fulfilled, (state, _action) => {
        // state.data = action.payload
        state.status = 'fulfilled'
      })
      .addCase(createTest.rejected, (state, action: any) => {
        state.status = 'rejected',
        state.error = action.payload.message
      })
  }
})

export default testSlice.reducer as Reducer<typeof initialState>
// omit exports

