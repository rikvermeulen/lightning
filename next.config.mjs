/** @type {import('next').NextConfig} */

import { config as dotenvConfig } from 'dotenv-safe';
import { resolve } from 'path';

const { parsed: localEnv } = dotenvConfig({
  allowEmptyValues: true,
  path: resolve(process.cwd(), `src/config/.env.${process.env.NODE_ENV}`),
});

const config = {
  reactStrictMode: true,
  env: localEnv,
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
};

export default config;
