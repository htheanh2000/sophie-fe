import { createAsyncThunk } from "@reduxjs/toolkit";


export interface IResponse {
  name: string;
    owner: string;
    question: string;
    subject: string;
    duration: number;
    correctAnswer: string[];
    id: string;
}

export interface IError {
  code: string,
  message:string
}


export interface ITest {
    name: string;
    owner: string;
    question: string;
    subject: string;
    duration: number;
    correctAnswer: string[];
}

// omit imports and state
export const createTest = createAsyncThunk('create-a-test', async (props: ITest, { rejectWithValue }) => {
    try {
      const URL = process.env.NEXT_PUBLIC_BASE_URL + 'tests'
      const response =  await fetch(URL, {
        method: "POST",
        body: JSON.stringify(props),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data:IResponse = await response.json()
      if(response.ok) {
        return data
      }
      else {
        return rejectWithValue(data)
      }
    } catch (error: any) {
      const response:IError = error.response 
      if (!response) {
        throw error
      }
      return rejectWithValue(response)
    }
  })
  

  