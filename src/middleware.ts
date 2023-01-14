// middleware.ts
import { NextResponse } from 'next/server';

export function middleware() {
  NextResponse.next();
}
