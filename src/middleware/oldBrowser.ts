/**
 * Import vendor modules
 */
const expressBrowserSupport = require('express-browsersupport');

module.exports = (
  supportedBrowsers = ['Chrome >= 41', 'Firefox >= 13', 'Safari >= 10', 'IE >= 99', 'Edge == All'],
  debug = false
) => {
  console.info(`[OLD BROWSER] Enabled! Supported Browser Rules: ${supportedBrowsers.join(', ')}`);

  /**
   * Check if supported browsers are correct
   */
  if (typeof supportedBrowsers === 'undefined' || !Array.isArray(supportedBrowsers)) {
    console.error("[OLD BROWSER] Option 'supported_browsers' must be an Array");
    process.exit(1);
    return;
  }

  /**
   * Check if debug is set correctly
   */
  if (typeof debug === 'undefined' || typeof debug !== 'boolean') {
    console.error("[OLD BROWSER] Option 'debug' must be a Boolean");
    process.exit(1);
    return;
  }

  /**
   * Return the express middleware
   */
  // eslint-disable-next-line consistent-return
  return expressBrowserSupport({
    debug,
    supportedBrowsers,
  });
};

export {};
