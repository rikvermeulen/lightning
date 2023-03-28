/** @type {import('next').NextConfig} */

import { resolve } from 'path';
import { config as dotenvConfig } from 'dotenv-safe';

const { parsed: localEnv } = dotenvConfig({
  allowEmptyValues: true,
  path: resolve(process.cwd(), `src/config/.env.${process.env.NODE_ENV}`),
});

const config = {
  env: localEnv,
  experimental: {
    appDir: true,
  },
};

export default config;
