import { NextResponse } from 'next/server';

/**
 * Global middlewares
 * @see https://nextjs.org/docs/app/building-your-application/routing/middleware
 * @returns {void}
 */

export function middleware() {
  NextResponse.next();
}
