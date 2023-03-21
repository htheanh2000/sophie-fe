import { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server';

const URL = process.env.NEXT_PUBLIC_BASE_URL + 'auth/login'

export async function POST(request: Request) {
  const body = await request.json()
  const response = await fetch(URL, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return NextResponse.json( data );


}

