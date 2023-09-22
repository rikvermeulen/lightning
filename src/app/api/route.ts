/**
 * Route for GET method template function
 * @param request
 * @see https://nextjs.org/docs/app/building-your-application/routing/router-handlers
 * @returns
 */

import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  return NextResponse.json({ hello: 'world' });
}
