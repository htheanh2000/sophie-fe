import { createSlice, createAsyncThunk, Reducer } from '@reduxjs/toolkit'
// omit imports and state
export const createSocialAction = createAsyncThunk('createSocial', async (props: any, { rejectWithValue }) => {
  try {
    const response =  await fetch("api/interview/social", {
      method: "POST",
      body: JSON.stringify(props),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json()
    return data;
  } catch (error: any) {
    if (!error.response) {
      throw error
    }
    return rejectWithValue(error.response)
  }
})

interface Interview {
  id: string;
  title: string;
  startAt: string;
  venue: string;
  capacity: number;
  price: number;
  description: string;
  isManualApprove: boolean;
  privacy: string;
  banner: string;
  tags: string[];
  questionnaire?: any ;
}

export interface IState {
  status: 'idle' | 'loading',
  data: Interview | null,
  error: any
}

const initialState:IState = {
  status: 'idle',
  data: null ,
  error: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // omit reducer cases
  },
  extraReducers: builder => {
    builder
      .addCase(createSocialAction.pending, (state, _action) => {
        state.status = 'loading'
      })
      .addCase(createSocialAction.fulfilled, (state, action) => {
        state.data = action.payload
        state.status = 'idle'
        
      })
      .addCase(createSocialAction.rejected, (state, action: any) => {
        // console.log(action.payload.data)
        state.status = 'idle',
        state.error = action.payload
      })
  }
})

export default userSlice.reducer as Reducer<typeof initialState>
// omit exports

