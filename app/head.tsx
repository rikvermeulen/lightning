export default function Head() {
  return (
    <>
      <title>Lightning</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Lightning boilerplate for nextjs" />
      <meta name="author" content="John Doe" />
      <link rel="manifest" href="manifest.json" />

      <meta name="application-name" content="Lightning" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#000000" />

      <link rel="icon" type="image/ico" href="images/favicons/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="images/favicons/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="images/favicons/favicon-32x32.png" />

      {/* @Microsoft support */}
      <meta name="msapplication-config" content="images/favicons/browserconfig.xml" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="msapplication-TileImage" content="images/favicons/mstile-144x144.png" />

      {/*  @Apple support */}
      <meta name="apple-mobile-web-app-title" content="Lightning" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar" content="#000000" />
      <link rel="mask-icon" href="images/favicons/safari-pinned-tab.svg" color="#000000"></link>
      <link rel="apple-touch-icon" href="images/favicons/apple-512x512.png" />

      {/* @Twitter support */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content="https://yourdomain.com" />
      <meta name="twitter:title" content="Lightning" />
      <meta name="twitter:description" content="Lightning boilerplate for nextjs" />
      <meta
        name="twitter:image"
        content="https://yourdomain.com/icons/android-chrome-192x192.png"
      />
      <meta name="twitter:creator" content="@" />

      {/* Open Graph protocol support */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Lightning" />
      <meta property="og:description" content="Lightning boilerplate for nextjs" />
      <meta property="og:site_name" content="Lightning" />
      <meta property="og:url" content="https://yourdomain.com" />
      <meta property="og:image" content="https://yourdomain.com/icons/apple-touch-icon.png" />
    </>
  );
}
