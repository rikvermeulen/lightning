/** @type {import('next').NextConfig} */

const path = require('path');
const dotenv = require('dotenv-safe');

const { parsed: localEnv } = dotenv.config({
  allowEmptyValues: false,
  path: path.resolve(__dirname, `src/config/.env.${process.env.NODE_ENV}`),
});

const nextConfig = {
  output: 'standalone',
  env: localEnv,
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
