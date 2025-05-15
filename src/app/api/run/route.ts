// optional: proxy POST to Rust server
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.text();

  const res = await fetch('https://interpreter-production-1ca8.up.railway.app/run', {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' },
    body,
  });

  const text = await res.text();
  return new NextResponse(text, { status: res.status });
}
