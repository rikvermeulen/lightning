// eslint-disable-next-line import/no-import-module-exports
import type { NextFunction, Request, Response } from 'express';

const express = require('express');

class Server {
  #express = express();

  #host;

  #port;

  #node;

  constructor() {
    // Log server start
    console.info('[SERVER] App starting...');

    // Set the host and port
    this.#node = process.env.NODE_ENV !== 'production';
    this.#host = 'localhost';
    this.#port = 3000;

    // Set the Express app to allow proxy's
    this.#express.enable('trust proxy');

    // Disable powered by header for security reasons
    this.#express.disable('x-powered-by');

    // Handle Google Cloud Loadbalancer requests (If the app try's to redirect from /)
    this.#express.use((req: Request, res: Response, next: NextFunction) => {
      if (req.get('User-Agent') === 'GoogleHC/1.0') {
        return res.send('Hello Google');
      }

      return next();
    });
  }

  /**
   * Load global middlewares into the Express app
   */
  loadMiddlewares(middlewares: Array<Function>) {
    middlewares.forEach((mw) => {
      this.#express.use(mw);
    });

    console.info(`[SERVER] Loaded ${middlewares.length} global middleware(s)`);
  }

  loadNext(next: Function) {
    const app = next({ dev: this.#node, hostname: this.#host, port: this.#port });
    app.prepare();

    const nextHandler = app.getRequestHandler();

    this.#express.get('*', (req: Request, res: Response) => nextHandler(req, res));
  }

  run() {
    return this.#express.listen(this.#port, () => {
      console.info(
        `[SERVER] Service started with success! App running at: ${this.#host}:${this.#port}`
      );
    });
  }
}

module.exports = Server;
