/** @type {import('next').NextConfig} */

const path = require('path');
const dotenv = require('dotenv-safe');

const { parsed: localEnv } = dotenv.config({
  allowEmptyValues: true,
  path: path.resolve(__dirname, `src/config/.env.${process.env.NODE_ENV}`),
});

module.exports = {
  env: localEnv,
  experimental: {
    appDir: true,
  },
};
