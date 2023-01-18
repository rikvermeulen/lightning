import type { NextFetchEvent, NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const pwa = (
  name: string,
  shortName: string,
  description: string,
  themeColor: string,
  backgroundColor: string
) => {
  return async (req: NextRequest, res: any, _next: NextFetchEvent) => {
    if (typeof name === 'undefined' || typeof name !== 'string' || name === '') {
      console.error('[PWA] name is not correct');
      return NextResponse.next();
    }

    /**
     * Check if shortName is correct
     */
    if (typeof shortName === 'undefined' || typeof shortName !== 'string' || shortName === '') {
      console.error('[PWA] shortName is not correct');
      return NextResponse.next();
    }

    /**
     * Check if description is correct
     */
    if (
      typeof description === 'undefined' ||
      typeof description !== 'string' ||
      description === ''
    ) {
      console.error('[PWA] description is not correct');
      return NextResponse.next();
    }

    /**
     * Check if themeColor is correct
     */
    if (typeof themeColor === 'undefined' || typeof themeColor !== 'string' || themeColor === '') {
      console.error('[PWA] themeColor is not correct');
      return NextResponse.next();
    }

    /**
     * Check if backgroundColor is correct
     */
    if (
      typeof backgroundColor === 'undefined' ||
      typeof backgroundColor !== 'string' ||
      backgroundColor === ''
    ) {
      console.error('[PWA] backgroundColor is not correct');
      return NextResponse.next();
    }

    if (req.nextUrl.pathname.indexOf('manifest.json') !== -1) {
      console.info(
        `[PWA] Enabled! App Name: ${name}, App Short Name: ${shortName}, Theme Color: ${themeColor}, Background Color: ${backgroundColor}`
      );
      console.info(`[PWA] Exposed: /manifest.json`);

      const manifest = {
        short_name: 'shortName',
        name: 'name',
        description: 'description',
        icons: [
          {
            src: './images/favicons/icons-192x192.png',
            type: 'image/png',
            sizes: '192x192',
            purpose: 'any maskable',
          },
          {
            src: '/images/favicons/icons-512x512.png',
            type: 'image/png',
            sizes: '512x512',
          },
        ],
        background_color: backgroundColor,
        display: 'standalone',
        scope: '/',
        theme_color: themeColor,
        start_url: '/',
        orientation: 'portrait',
      };
      return res.json(manifest);
    }

    return res;
  };
};

export default pwa;
