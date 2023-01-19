// experiment server.ts
import next from 'next';

const pwa = require('../middleware/pwa');
const oldBrowser = require('../middleware/oldBrowser');

const Runtime = require('./test/runtime');
const Server = require('./test/server');

const server = new Server();

/**
 * Define global middlewares
 */
const globalMiddleware = [
  oldBrowser(),
  pwa(
    'Config.pwa.name',
    'Config.pwa.shortName',
    'Config.pwa.description',
    'Config.pwa.themeColor',
    'Config.pwa.backgroundColor',
    '0.0.0'
  ),
];

Runtime(() => {
  server.loadMiddlewares(globalMiddleware);
  server.loadNext(next);
  server.run();
});
