/** @type {import('next').NextConfig} */

const path = require('path');
const dotenv = require('dotenv-safe');
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development'
});

const { parsed: localEnv } = dotenv.config({
  allowEmptyValues: true,
  path: path.resolve(__dirname, `src/config/.env.${process.env.NODE_ENV}`),
});

module.exports = withPWA({
  output: 'standalone',
  env: localEnv,
  experimental: {
    appDir: true,
  },
});
