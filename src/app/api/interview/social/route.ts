import { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server';

type Data = {
    success?: boolean,
    error?: string,
    data?: unknown
}


export async function GET(request: Request) {
  return new Response('Hello, Next.js!')
}

export async function POST(request: Request) {
  const body = await request.json()
  const response = await fetch("https://api.supermomos-dev.com/interview/social", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return NextResponse.json( data );


}

