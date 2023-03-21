import { createAsyncThunk } from "@reduxjs/toolkit";


export interface IResponse {
  user: IUser,
  tokens:IToken
}

export interface IError {
  code: string,
  message:string
}


export interface IUser {
  role: string;
  isEmailVerified:boolean;
  email: string;
  name: string;
  id: string;
}

export interface IToken {
  access: {
    token: string;
    expires: string;
  },
  refresh: {
    token: string;
    expires: string;
  }
}

export interface ISignIn {
    email: string;
    password: string;
}

// omit imports and state
export const signin = createAsyncThunk('sign-in', async (props: ISignIn, { rejectWithValue }) => {
    try {
      const URL = process.env.NEXT_PUBLIC_BASE_URL + 'auth/login'
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
  

export interface ISignUp {
    email: string;
    password: string;
}
  
  export const signup = createAsyncThunk('sign-up', async (props: ISignUp, { rejectWithValue }) => {
    try {
      const URL = process.env.NEXT_PUBLIC_BASE_URL + 'auth/register'
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
  