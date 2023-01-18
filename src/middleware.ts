// middleware.ts
import { NextResponse } from 'next/server';

// const globalMiddlewares = [
//   oldBrowser(),
//   pwa(
//     process.env.PWA_NAME || '',
//     process.env.PWA_SHORTNAME || '',
//     process.env.PWA_DESCRIPTION || '',
//     process.env.PWA_THEMACOLOR || '',
//     process.env.PWA_BACKGROUNDCOLOR || ''
//   ),
// ];

export default async function middlewares() {
  return NextResponse.next();
}
