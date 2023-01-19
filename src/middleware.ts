// middleware.ts
import { NextResponse } from 'next/server';

export default async function middlewares() {
  return NextResponse.next();
}
