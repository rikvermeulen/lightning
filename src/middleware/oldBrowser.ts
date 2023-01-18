import type { NextFetchEvent, NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const oldBrowser = (
  supportedBrowsers = ['Chrome >= 120', 'Firefox >= 13', 'Safari >= 10', 'IE >= 99', 'Edge == All'],
  debug = true
) => {
  return async (request: NextRequest, res: any, _next: NextFetchEvent) => {
    console.info(`[OLD BROWSER] Enabled! Supported Browser Rules: ${supportedBrowsers.join(', ')}`);

    /**
     * Check if supported browsers are correct
     */
    if (typeof supportedBrowsers === 'undefined' || !Array.isArray(supportedBrowsers)) {
      console.error("[OLD BROWSER] Option 'supported_browsers' must be an Array");
      return NextResponse.next();
    }

    /**
     * Check if debug is set correctly
     */
    if (typeof debug === 'undefined' || typeof debug !== 'boolean') {
      console.error("[OLD BROWSER] Option 'debug' must be a Boolean");
      return NextResponse.next();
    }

    // const { browser } = userAgent(request);

    // if (browser.major <= 120) {
    //   console.info(`[OLD BROWSER] Redirecting to /about`);
    //   return res.redirect(new URL('/about', request.url));
    // }

    return res.next();
  };
};
